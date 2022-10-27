import { Alert, AlertIcon, Spinner } from "@chakra-ui/react";
import { Children } from "react";

export type LoadableProps = {
    isLoading: boolean,
    error: string | undefined,
    children?: React.ReactNode;
}

export default function Loadable(props: LoadableProps) :JSX.Element {
    const { isLoading, error, children } = props;
    const errorExists = error != undefined;
    return (
        <>
            {isLoading ? <Spinner /> : !errorExists ? children :
            <>
                <Alert status='error'>
                    <AlertIcon />
                    {error}
                </Alert>
            </>}
        </>
    )
}