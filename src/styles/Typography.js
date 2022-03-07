import { createGlobalStyle } from 'styled-components';


const Typography=createGlobalStyle`
    @import url("https://use.typekit.net/lfo7ogs.css");

    p {
        font-family: 'proxima-nova', sans-serif;
        font-weight: 600;
        font-size: 36px;
        line-height: 40px;
        letter-spacing: 2px;
    }

    h1 {
        font-family: 'meno-banner', serif;
        font-weight: 600;
        font-size: 84px;
        line-height: 88px;
    }

    h2 {
        font-family: 'meno-banner', serif;
        font-weight: 600;
        font-size: 54px;
        line-height: 60px;
    }

    h3 {
        font-family: 'meno-banner', serif;
        font-weight: 600;
        font-size: 38px;
        line-height: 42px;
    }

    h4 {
        font-family: 'meno-banner', serif;
        font-weight: 600;
        font-size: 28px;
        line-height: 22px;
    }
`

export default Typography;