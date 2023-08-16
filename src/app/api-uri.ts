import { environment } from 'environments/environment';

export const APIURI = {
  accounts: {
    verifySms: `${environment.origin}Accounts/VerifySms`,
    getDisplayName: `${environment.origin}Accounts/GetDisplayName`,
    changePassword: `${environment.origin}Accounts/ChangePassword`,
    sendOtp: `${environment.origin}Accounts/SendOtp`,
    signIn: {
      signIn: `${environment.origin}Accounts/SignIn`,
    },
    signUp: {
      SecurityQuestions: `${environment.origin}SecurityQuestions/GetSecurityQuestions`,
      SignUpComplete: `${environment.origin}Accounts/SignUp`
    },
    resetPasswword: {
      otpSms: `${environment.origin}Accounts/ResetPassword/Otp/Sms`,
      resetPassword: `${environment.origin}Accounts/ResetPassword`,
    },
    changePhoneNumber: {
      otpSms: `${environment.origin}Accounts/ChangePhoneNumber/Otp/Sms`,
      changePhoneNumber: `${environment.origin}Accounts/ChangeNumber`,
    },
    users: {
      accounts: `${environment.origin}Accounts`,
      changeDisplayName: `${environment.origin}Accounts/ChangeDisplayName`,
    },
    logout: `${environment.origin}Accounts/Logout`,
    refreshToken: `${environment.origin}Accounts/RefreshToken`,
    updateAvatar: `${environment.origin}Accounts/UploadAvatar`
  },
}