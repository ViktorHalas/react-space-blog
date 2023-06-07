import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "services/firebase/firebase";
import { FirebaseErrorCode, FirebaseErrorMessage, getFBErrorMessage } from "utils";

interface UserState {
  name: string;
  email: string | null;
  id:string;
  isAuth: boolean;
  isLoading:boolean;
  error: null | string;
}

interface UserNameEmail {
  userEmail: string | null;
  name: string;
}

interface UserEmail {
  userEmail: string | null;
}

interface CreateFirebaseAuth {
  email: string;
  password: string;
  userName: string;
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
>("user/signUpUser", async ({ email, password, userName }, { rejectWithValue }) => {
  try {
    const userCredential = createUserWithEmailAndPassword(auth, email, password);
    const userEmail = (await userCredential).user.email;
    const name = userName;

    return { userEmail, name };
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
  try {;
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

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserName: (state, { payload }: PayloadAction<string>) => {
      state.name = payload;
      state.email = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchSignUpUser.pending, (state) => {
      state.isAuth = false;
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(fetchSignUpUser.fulfilled, (state, { payload }) => {
      state.isAuth = true;
      state.error = null;
      state.name = payload.name;
      state.email = payload.userEmail;
      state.isLoading = true;
    });
    builder.addCase(fetchSignUpUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isAuth = false;
        state.error = payload;
        state.isLoading = false;
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
  },
});

export default userSlice.reducer;
export const { getUserName } = userSlice.actions;