import { useOktaAuth } from '@okta/okta-react';

export default function RequireAuth({ children }: React.PropsWithChildren<{}>) {
  const { authState } = useOktaAuth();

  if (!authState || authState.isPending) {
    // Đang xác thực, có thể show spinner hoặc null
    return <div>Loading...</div>;
  }

  if (!authState.isAuthenticated) {
    // Chưa đăng nhập, chuyển hướng sang login
    window.location.replace('/login');
    return null;
  }

  return <>{children}</>;
}