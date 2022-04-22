import { LoaderWrapper } from "components/Loader/Loader.styled";
import { Grid } from  'react-loader-spinner'



export const Loader = ({status}) => {
    return (
        <>
            {status && 
                <LoaderWrapper>
                    <Grid color="#00BFFF" height={80} width={80}/>
                </LoaderWrapper>
            }
        </>
        
    )
}
