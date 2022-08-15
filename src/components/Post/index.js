import LinkPreview from "../../components/Link";
import { useNavigate } from "react-router-dom";

import { PostContainer } from "./style";

export default function Post({ info, userId }) {
    const { username, text, userImg, id, postUserId } = info;
    const navigate = useNavigate();

    return (
        <PostContainer>
            <section>
                <img className="user" src={userImg} alt="" />
                {/* {userId ? <LikeButton userId={userId} postId={id} /> : <></>} */}
            </section>
            <div className="post-body">
                <h2 onClick={() => navigate(`/user/${postUserId}`)}>
                    {username}
                </h2>
                <p>
                    {/* onde vai vir as hashtags */} 
                </p>
                <LinkPreview metaData={info} />
            </div>
        </PostContainer>
    );
}