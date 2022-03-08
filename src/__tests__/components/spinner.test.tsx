import React from "react";
import { renderWithTheme } from "../../testHelpers";
import { Spinner } from "../../components/Spinner";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Spinner />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-gsDKAQ dFzOKQ"
      >
        <svg
          class="sc-bdvvtL bDLLMB sc-dkPtRN bOPIJ"
          color="text"
          viewBox="0 0 32 32"
          width="64px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <image
            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAG7ElEQVRYhe1We1QU9xX+5rE7+2QfsKCALHoAG0FrAItKMEokVDQittajNUlTjUlDik00pqbatKexaEy0Nom11qblGDTRtFG0WmJCNkRCkKB5FB9ZBOSxu+zC7rLv3dmZ6dnpCYdoDNp/8o/fOTNn5p7ffPe793d/dy5u4za+bRAx/9q8BbcsI8px0KpVdUkJet2nlzqKVEolIPC3xOFuOwXy/02Az+NF6jhD3ht/+O1dUzLSd7sHHDPB84sEnr8XwEwAhQDSvgzyRrhVAe0ESVazwQBg7fsJ7/fIeqwDmJKRXkXLZc08QRwPDjnqPZae5sCgfUk0HHKDIAQQN9ZAxW6y5MwxPRMxEkF4yWuzFCkNhorslWse8SoMcr0QwIoF8/CXA4ehzbsL8zf+BkrDuDDFMNaQ26nzO2wBkqTsFCOLff8VzpC14+YEEBSFkMcNv8NWlFmyaFLuqspxSelZuGTuxsmaGuTnZOLJh5bjypVOtPUMY+7qtXTa7Pk5k+aVlemMGY95LFcrQm5niKQlnwMQRgu4mS1QsX7fC5pUY+uc9b8rzFn6EFh/CGcbTKC+aMHeLY8jNTUVRUWzUZb3HWjfP4g/L10Ed3cPvP09sJxrhsALWpKiHwdwPwDFaHL6JgRMAUEUUBJpvtdmgddqhT77e+i32XCm+hfIn5EvLvq43YwAR6Cp8QQWrViLtzY8Ar0hDlwkwIY93nKZVvcpgAQIAjeafMwMCDzPUVJGR0mlCHudGPYH8c7Rt7AqOx6dVjveazkPQRCQn52JovxpMH10Dk3Ha2GME+Ds6ceSlw5L0ufcc8rdZZYTwCCA8C0JIEiyjZLQc3o7Ov7YfuhQtOeDf2PHku+ivGAKnnrhr4hTKsQCdbqHkZedBU8gBJ7n0Xz6TRCIoOn111Dw8MbxqTPnnHd1mVP4aDTGOcI/ZhGSFAWXfRA6hWzu+soHC47+6TmyeHY+EhMNqFxZgYkTksV1Vy0DMLWcjx0XvFx7FCsX3gONTo1Du19BSm4hMu5dnCBVqR4e7u0iuUhYSVKUPGTtsI8pwDfsQVKCrq71+N8fqFgwj7QOuvBuc5sYLcNIR9b5g2E0tn4i2it/tgmlpXdjWdl8vFZ3Ap02F+B2gGNDTMTvLQ4Pu6aTtKQxZO3oGnML2CE3cmdMZ9OSk8T3ispf4Z/174vPEZbFsM8vPhuTk1D1wA8xeWIawPPYvq9WtC9fOB+ugX64ur/AJ/t2HPMNWGZKFMppABrGrAGCICHRqvBhfQN17N0zoq1ubzUO7nwW3f027Ko5gpcP/APB0P/qSqWQ4+0zZ5FXOhddfTbRdl9pMdRcAJQmAcr0TAVBkC0Cz4/0gm8UwAZ8P9UZ01udEbKstvawaEsbn4R2cxd+v6cGJBuFXqOGXMbAEwqjfOlqVO89gIMvboFUKoHFPojJGZOgjPpBqPRIySsqCbgcq0e35q/rAyRBkBURv/dZQRCmGrJycOejT6P9vZPYunsfVpR/H702O9Y9uAwZaSlgZAw27dqPt0834typA4hlKistBZMnTYDPH4RarQIlcAh6XMguLofP2rPfY+1dQMvkTwDovU4ASdGCf9C+TuCjUycvXIbkvFlIMCSCWbYWm5+qhLevG9uqfw3QMnH9zldfx7YnqwAEUfX8XiwuLhSP4d0zpmNi6nhctTngj0ShjATRaTqBSMBnoiTSwI0yYAw4HZuSsqenFFRu4nXpRjLiC2HIfBmsx4NZy1fhYNNptFZtR3qSHiZTIzpNJkA7ERs3r8P29WtFklA4gsLcqZBIaHx2yQxXiEOiXA5rq+lKJOCdxyjVYvMaLSALQDWApSRNQ+A5DHVehLPjIjx9fSApCeS6BGj1eox/9Jdoqj+FhuodKPlRCX68axsKC+5E6azckSgUchl0Wg3cgRBMTWfBU3KEHRZEfMNVUrVmxPloAXliixSEw4wq7gdB5xB1+dibiM+8Awp9IuQaPVRJyYhyPBr+tgf+Cy3YumMDnvn5musK6OP/XBa3IOeOLMRmhTrTR6AowNVj3knLlSev/SV/KeCQeBEEuChrJGnJGolCcb/A8UaKloCSMrCbL8J21oSyCWps/dd+pBuNXyGK0W7Z9go8LIudz1QBFIk9NUdw9YIZmgnJT3Ms93yMS7hGwHUzYayv8xwHNuAlo5HIYpqRLZFr40t8Q0PJKorHhicew6zcqVDLGWji1PD4AmhobkPNkRP43NSMqs1VUMpkqP+gxf/Z5StvyGj6RYlMeuEavyJiM+GYQ6nA8+DYsISSSAt4kAXeAfs0EGQGFLJxKoVCE2ZZmrU5QpBJnfHGVMvQwOAFDLk+hFr5jjJeN8gwjBjQ1yEm4DZu49sFgP8Cg63k1QqxlicAAAAASUVORK5CYII="
            width="32"
          />
        </svg>
      </div>
    </DocumentFragment>
  `);
});
