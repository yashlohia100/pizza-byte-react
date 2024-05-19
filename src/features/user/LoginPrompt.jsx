import Button from '../../ui/Button';

function LoginPrompt() {
  return (
    <div className="px-4 py-8">
      <p className="text-center">Please login/signup to continue...</p>

      <div className="mt-6 space-x-4 text-center">
        <Button to="/login" type="small">
          Login
        </Button>

        <Button to="/signup" type="small">
          Signup
        </Button>
      </div>
    </div>
  );
}

export default LoginPrompt;
