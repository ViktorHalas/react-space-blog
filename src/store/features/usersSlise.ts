import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
  signOut,
} from "firebase/auth";
import { User } from "firebase/auth";
import { doc, setDoc} from "firebase/firestore";
import { auth, db } from "services";
import { FirebaseErrorCode, FirebaseErrorMessage, getFBErrorMessage } from "utils";

interface UserState {
  name: string | null;
  email: string | null;
  id:string;
  isAuth: boolean;
  isLoading:boolean;
  error: null | string;
}

interface UserNameEmail {
  email: string | null;
  name: string | null;
  id: string;
}

interface UserEmail {
  userEmail: string | null;

}

interface CreateFirebaseAuth {
  email: string;
  password: string;
  name: string;
}

interface SignInFirebaseAuth {
  email: string;
  password: string;
}

interface ResetPassword {
  email:string;
}
const initialState: UserState = {
  name: "",
  email: "",
  id: "",
  isAuth: false,
  isLoading: false,
  error: "",
};

export const fetchSignUpUser = createAsyncThunk<
  UserNameEmail,
  CreateFirebaseAuth,
  { rejectValue: FirebaseErrorMessage }
>("user/signUpUser", async ({ email, password, name }, { rejectWithValue }) => {
  try {
    const {user} = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(user, { displayName: name });
    await setDoc(doc(db, "users", user.uid), {
      name: user.displayName,
      email: user.email,
      id: user.uid,
    });
    return {
      name: user.displayName,
      email: user.email,
      id: user.uid,
    };
  } catch (error) {
    const firebaseError = error as { code: FirebaseErrorCode };
    return rejectWithValue(getFBErrorMessage(firebaseError.code));
  }
});

export const fetchSignInUser = createAsyncThunk<
  UserEmail,
  SignInFirebaseAuth,
  { rejectValue: FirebaseErrorMessage }
>("user/sigInUser", async ({ email, password }, { rejectWithValue }) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const userEmail = userCredential.user.email;

    return { userEmail };
  } catch (error) {
    const firebaseError = error as { code: FirebaseErrorCode };
    return rejectWithValue(getFBErrorMessage(firebaseError.code));
  }
});

export const fetchResetPassword = createAsyncThunk<
  void,
  ResetPassword,
  { rejectValue: FirebaseErrorMessage }
>("user/resetPassword", async ({ email }, { rejectWithValue }) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    const firebaseError = error as { code: FirebaseErrorCode };
    return rejectWithValue(getFBErrorMessage(firebaseError.code));
  }
});

export const fetchLogOut = createAsyncThunk<void, void, { rejectValue: FirebaseErrorMessage }>(
  "user/signOut",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);;
    } catch (error) {
      const firebaseError = error as { code: FirebaseErrorCode };
      return rejectWithValue(getFBErrorMessage(firebaseError.code));
    }
  },
);
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<User | null>) => {
      if (payload) {
        state.name = payload.displayName;
        state.email = payload.email;
        state.id = payload.uid;
        state.isAuth = true;
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchSignUpUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSignUpUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      if (payload) {
        state.name = payload.name;
        state.email = payload.email;
        state.id = payload.id;
        state.isAuth = true;
      }
    });
    builder.addCase(fetchSignUpUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      if (payload) {
        state.error = payload;
      }
    });

    builder.addCase(fetchSignInUser.pending, (state) => {
      state.isAuth = false;
      state.error = null;
    });
    builder.addCase(fetchSignInUser.fulfilled, (state, { payload }) => {
      state.isAuth = true;
      state.error = null;
      state.email = payload.userEmail;
    });
    builder.addCase(fetchSignInUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isAuth = false;
        state.error = payload;
      }
    });

    builder.addCase(fetchResetPassword.fulfilled, (state, { payload }) => {
      state.error = null;
    });
    builder.addCase(fetchResetPassword.rejected, (state, { payload }) => {
      if (payload) {
        state.error = payload;
      }
    });
    builder.addCase(fetchLogOut.fulfilled, (state, action) => {
      state.isAuth = false;
      state.email = "";
      state.name = "";
    });
    builder.addCase(fetchLogOut.rejected, (state, { payload }) => {
      if (payload) {
        state.error = payload;
      }
    });
  },
});

export default userSlice.reducer;
export const { setUser } = userSlice.actions;