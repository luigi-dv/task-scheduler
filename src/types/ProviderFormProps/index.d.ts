type ProviderFormProps = {
    signIn : (provider: string, p: { redirectTo: string }) => void;
}