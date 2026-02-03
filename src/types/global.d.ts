import { MyPage } from "../app/my-page";
import { MyHeader } from "../atom-components/my-header"
import { MyArticle } from "../atom-components/my-article"
import { MyFooter } from "../atom-components/my-footer"

declare global {
    interface HTMLElementTagNameMap {
        'my-page': MyPage,
        'my-header': MyHeader,
        'my-article': MyArticle,
        'my-footer': MyFooter
    }
}

/** global.d.ts necessario per avere tipi precisi */