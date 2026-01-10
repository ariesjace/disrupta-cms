import LoginForm from "@/components/auth-forms/login"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted px-4">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}
