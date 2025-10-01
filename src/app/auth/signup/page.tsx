import { AuthForm } from '@/components/auth/auth-form';

export default function SignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
      <AuthForm mode="signup" />
    </div>
  );
}
