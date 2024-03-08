import {AiFillHeart} from "react-icons/ai";
import {FaRegComment} from "react-icons/fa";
import {Flex, Typography} from "../../style";
import * as C from "./style";

export function InfoProfile(){
    return (
        <Flex directin="row" align="center" justify="space-between">
            <C.Container>
                <C.Link>
                    <C.ProfileImage 
                        src="https://avatars.githubusercontent.com/u/157861366?v=4"
                        alt="imagemperfil github"                 
                    />
                    <Typography weight="300" size="13px" height="15px">
                        Rodrigo
                    </Typography>
                </C.Link>
            </C.Container>

            <C.Container>
                <AiFillHeart color="red" />
                <Typography weight="300" size="13px" height="15px">
                    1234
                </Typography>
            
                <FaRegComment />
                <Typography weight="300" size="13px" height="15px">
                    52
                </Typography>
            </C.Container>
        </Flex>
    );
}