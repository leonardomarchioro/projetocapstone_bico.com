import { ProviderService } from "./Services";
import { ProviderUser } from "./User";
import { ProviderAvatars } from "./Avatars";

const Providers = ({ children }) => {
  return (
    <ProviderUser>
      <ProviderService>
        <ProviderAvatars>{children}</ProviderAvatars>
      </ProviderService>
    </ProviderUser>
  );
};

export default Providers;
