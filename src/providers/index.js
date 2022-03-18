import { ProviderService } from "./Services";
import { ProviderUser } from "./User";



const Providers = ({ children }) => {
    return (
        <ProviderUser>
            <ProviderService>
                {children}
            </ProviderService>
        </ProviderUser>
    )
}

export default Providers