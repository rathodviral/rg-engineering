import { OtpModule } from './otp.module';

describe('OtpModule', () => {
  let otpModule: OtpModule;

  beforeEach(() => {
    otpModule = new OtpModule();
  });

  it('should create an instance', () => {
    expect(otpModule).toBeTruthy();
  });
});
