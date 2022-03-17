import { ProviderUser } from "./User";



const Providers = ({ children }) => {
    return (
        <ProviderUser>
            {children}
        </ProviderUser>
    )
}

export default Providers