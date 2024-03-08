import { Typography } from "../../style";
import { InfoProfile } from "../infoProfile";
import * as C from "./style";

export function Publications() {
    return (
        <C.Container>
            <Typography>Publicações</Typography>

            <C.ContainerPublications>
                {Array.from(Array(20)).map((item, index) => (
                    <C.Content key={index}>
                        <C.PublicationImage
                            src="https://avatars.githubusercontent.com/u/157861366?v=4"
                            alt="imagemperfil github"
                        />

                     <InfoProfile />
                    </C.Content>
                ))}
            </C.ContainerPublications>
        </C.Container>
    );
}