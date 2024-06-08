import { AuthScreen } from "../screens/Auth";
import { AppNavigation } from "./AppNavigation";

export function RootNavigation() {
  const user = null;
  return user ? <AuthScreen /> : <AppNavigation />;
}
