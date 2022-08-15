import { LinkPreviewContainer } from "./style";
import placeholder from "../../assets/images/placeholder.svg";

export default function LinkPreview({ metaData }) {
    const { title, description, post_img, url } = metaData;
    const regex =
        /(https:\/\/|http:\/\/)([^\s(["<,>])*(\/)[^\s[",><]*(.png|.jpg)(\?[^\s[",><]*)?/;

    return (
        <LinkPreviewContainer>
            <a href={url} target="_blank" rel="noopener">
                <section>
                    <h1>{title}</h1>
                    <small>{description}</small>
                    <p className="link">{url}</p>
                </section>
                <section>
                    <img
                        src={regex.test(post_img) ? post_img : placeholder}
                        alt=""
                    />
                </section>
            </a>
        </LinkPreviewContainer>
    );
}