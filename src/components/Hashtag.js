import ReactHashtag from "@mdnm/react-hashtag";
import styled from "styled-components";

export default function Hashtag({ children }) {
    return(
        <ReactHashtag
            renderHashtag={(hashtagValue) => {
                const hashtag = hashtagValue.slice(1).toLowerCase();
                return (
                    <StyledHashtag key={hashtag} href={`/hashtag/${hashtag}`}>
                        {hashtagValue}
                    </StyledHashtag>
                )}
            }
        >
            {children}
      </ReactHashtag>
    );
};

const StyledHashtag = styled.a`
    font-weight: 700;
    color: #FFFFFF;
`;