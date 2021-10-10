/** @jsx jsx */
import { jsx, css } from "@emotion/react";

const scaling = css`
position: relative;
padding-bottom: 56.25%;
height: 0;

iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
`;

const outerDiv = css`
margin-left: 25%;
margin-right: 25%;

@media (max-width: 900px) {
    margin-left: 10%;
    margin-right: 10%;
}

@media (max-width: 1000px) {
    margin: 0;
}
`

const Video = ({ code }: { code: string }) => {
    return <div css={outerDiv}><div css={scaling}>
        <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${code}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    </div ></div>
}

export default Video;
