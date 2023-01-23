import '../../../assets/css/style.css'

const Footer = () => {
  return (
    <footer>
        <div className="wrapper">
          <a className="logo" href="/">
            <svg width="277" height="53" viewBox="0 0 277 53" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="14" cy="18" r="6" fill="white"/>
              <circle cx="28" cy="32" r="6" fill="white"/>
              <circle cx="28" cy="18" r="6" fill="white"/>
              <circle cx="14" cy="32" r="6" fill="white"/>
              <path d="M50.67 34.75V17.71H56.718C58.558 17.71 60.094 18.094 61.326 18.862C62.558 19.614 63.478 20.638 64.086 21.934C64.71 23.214 65.022 24.638 65.022 26.206C65.022 27.934 64.678 29.438 63.99 30.718C63.318 31.998 62.358 32.99 61.11 33.694C59.862 34.398 58.398 34.75 56.718 34.75H50.67ZM62.286 26.206C62.286 25.006 62.062 23.95 61.614 23.038C61.182 22.11 60.55 21.39 59.718 20.878C58.902 20.35 57.902 20.086 56.718 20.086H53.358V32.374H56.718C57.918 32.374 58.926 32.102 59.742 31.558C60.574 31.014 61.206 30.278 61.638 29.35C62.07 28.422 62.286 27.374 62.286 26.206ZM66.4611 31.078C66.4611 30.278 66.6851 29.582 67.1331 28.99C67.5971 28.382 68.2291 27.918 69.0291 27.598C69.8291 27.262 70.7571 27.094 71.8131 27.094C72.3731 27.094 72.9411 27.134 73.5171 27.214C74.1091 27.294 74.6291 27.422 75.0771 27.598V26.806C75.0771 25.926 74.8131 25.238 74.2851 24.742C73.7571 24.246 72.9971 23.998 72.0051 23.998C71.3011 23.998 70.6371 24.126 70.0131 24.382C69.3891 24.622 68.7251 24.966 68.0211 25.414L67.1331 23.638C67.9651 23.078 68.7971 22.662 69.6291 22.39C70.4771 22.118 71.3651 21.982 72.2931 21.982C73.9731 21.982 75.2931 22.43 76.2531 23.326C77.2291 24.206 77.7171 25.462 77.7171 27.094V31.774C77.7171 32.078 77.7651 32.294 77.8611 32.422C77.9731 32.55 78.1571 32.622 78.4131 32.638V34.75C78.1731 34.798 77.9571 34.83 77.7651 34.846C77.5731 34.862 77.4131 34.87 77.2851 34.87C76.7251 34.87 76.3011 34.734 76.0131 34.462C75.7251 34.19 75.5571 33.87 75.5091 33.502L75.4371 32.782C74.8931 33.486 74.1971 34.03 73.3491 34.414C72.5011 34.798 71.6451 34.99 70.7811 34.99C69.9491 34.99 69.2051 34.822 68.5491 34.486C67.8931 34.134 67.3811 33.662 67.0131 33.07C66.6451 32.478 66.4611 31.814 66.4611 31.078ZM74.4531 31.846C74.6451 31.638 74.7971 31.43 74.9091 31.222C75.0211 31.014 75.0771 30.83 75.0771 30.67V29.23C74.6291 29.054 74.1571 28.926 73.6611 28.846C73.1651 28.75 72.6771 28.702 72.1971 28.702C71.2371 28.702 70.4531 28.894 69.8451 29.278C69.2531 29.662 68.9571 30.19 68.9571 30.862C68.9571 31.23 69.0531 31.582 69.2451 31.918C69.4531 32.254 69.7411 32.526 70.1091 32.734C70.4931 32.942 70.9651 33.046 71.5251 33.046C72.1011 33.046 72.6531 32.934 73.1811 32.71C73.7091 32.486 74.1331 32.198 74.4531 31.846ZM80.9199 34.75V22.198H83.5599V34.75H80.9199ZM80.9199 20.134V17.23H83.5599V20.134H80.9199ZM86.7564 17.23H89.3964V31.126C89.3964 31.766 89.4924 32.174 89.6844 32.35C89.8764 32.526 90.1164 32.614 90.4044 32.614C90.7244 32.614 91.0204 32.582 91.2924 32.518C91.5804 32.454 91.8284 32.374 92.0364 32.278L92.4204 34.366C92.0364 34.526 91.5804 34.662 91.0524 34.774C90.5244 34.886 90.0524 34.942 89.6364 34.942C88.7404 34.942 88.0364 34.694 87.5244 34.198C87.0124 33.686 86.7564 32.982 86.7564 32.086V17.23ZM93.8441 37.702C94.0841 37.734 94.3161 37.766 94.5401 37.798C94.7801 37.846 94.9721 37.87 95.1161 37.87C95.3881 37.87 95.6201 37.782 95.8121 37.606C96.0201 37.446 96.2281 37.142 96.4361 36.694C96.6441 36.246 96.9001 35.598 97.2041 34.75L92.0441 22.198H94.8041L98.6441 32.062L102.052 22.198H104.596L98.9081 37.654C98.7321 38.118 98.4761 38.542 98.1401 38.926C97.8041 39.326 97.3881 39.638 96.8921 39.862C96.3961 40.086 95.8121 40.198 95.1401 40.198C94.9481 40.198 94.7481 40.182 94.5401 40.15C94.3321 40.118 94.1001 40.07 93.8441 40.006V37.702ZM122.25 21.718C122.09 21.542 121.858 21.358 121.554 21.166C121.25 20.958 120.89 20.766 120.474 20.59C120.058 20.414 119.61 20.27 119.13 20.158C118.65 20.046 118.154 19.99 117.642 19.99C116.522 19.99 115.69 20.198 115.146 20.614C114.602 21.03 114.33 21.606 114.33 22.342C114.33 22.886 114.482 23.318 114.786 23.638C115.09 23.942 115.554 24.198 116.178 24.406C116.802 24.614 117.586 24.838 118.53 25.078C119.682 25.35 120.682 25.678 121.53 26.062C122.378 26.43 123.026 26.926 123.474 27.55C123.922 28.174 124.146 28.998 124.146 30.022C124.146 30.886 123.986 31.63 123.666 32.254C123.346 32.878 122.898 33.39 122.322 33.79C121.746 34.174 121.082 34.462 120.33 34.654C119.578 34.83 118.77 34.918 117.906 34.918C117.058 34.918 116.21 34.83 115.362 34.654C114.53 34.478 113.73 34.222 112.962 33.886C112.21 33.534 111.514 33.11 110.874 32.614L112.098 30.31C112.306 30.518 112.602 30.75 112.986 31.006C113.386 31.246 113.842 31.478 114.354 31.702C114.882 31.926 115.45 32.118 116.058 32.278C116.682 32.422 117.314 32.494 117.954 32.494C119.026 32.494 119.842 32.31 120.402 31.942C120.978 31.558 121.266 31.014 121.266 30.31C121.266 29.734 121.082 29.278 120.714 28.942C120.346 28.59 119.81 28.294 119.106 28.054C118.402 27.814 117.562 27.574 116.586 27.334C115.466 27.03 114.53 26.702 113.778 26.35C113.026 25.982 112.458 25.518 112.074 24.958C111.706 24.382 111.522 23.654 111.522 22.774C111.522 21.654 111.794 20.71 112.338 19.942C112.882 19.158 113.618 18.574 114.546 18.19C115.49 17.79 116.546 17.59 117.714 17.59C118.482 17.59 119.21 17.678 119.898 17.854C120.586 18.014 121.226 18.238 121.818 18.526C122.426 18.814 122.978 19.142 123.474 19.51L122.25 21.718ZM132.194 34.99C131.218 34.99 130.33 34.822 129.53 34.486C128.746 34.134 128.066 33.654 127.49 33.046C126.914 32.438 126.466 31.742 126.146 30.958C125.842 30.174 125.69 29.342 125.69 28.462C125.69 27.278 125.954 26.198 126.482 25.222C127.026 24.246 127.778 23.462 128.738 22.87C129.714 22.278 130.866 21.982 132.194 21.982C133.474 21.982 134.586 22.27 135.53 22.846C136.49 23.406 137.194 24.158 137.642 25.102L135.074 25.918C134.786 25.39 134.378 24.982 133.85 24.694C133.338 24.39 132.77 24.238 132.146 24.238C131.442 24.238 130.802 24.422 130.226 24.79C129.666 25.142 129.218 25.638 128.882 26.278C128.562 26.902 128.402 27.63 128.402 28.462C128.402 29.262 128.57 29.99 128.906 30.646C129.242 31.286 129.69 31.798 130.25 32.182C130.826 32.55 131.466 32.734 132.17 32.734C132.602 32.734 133.018 32.662 133.418 32.518C133.834 32.358 134.194 32.15 134.498 31.894C134.802 31.622 135.018 31.326 135.146 31.006L137.738 31.774C137.466 32.398 137.058 32.95 136.514 33.43C135.986 33.91 135.354 34.294 134.618 34.582C133.898 34.854 133.09 34.99 132.194 34.99ZM151.168 34.75H148.528V27.718C148.528 26.582 148.32 25.734 147.904 25.174C147.488 24.614 146.904 24.334 146.152 24.334C145.688 24.334 145.208 24.462 144.712 24.718C144.216 24.974 143.776 25.326 143.392 25.774C143.008 26.206 142.728 26.71 142.552 27.286V34.75H139.912V17.23H142.552V24.718C143.032 23.87 143.688 23.206 144.52 22.726C145.352 22.23 146.248 21.982 147.208 21.982C147.992 21.982 148.64 22.118 149.152 22.39C149.664 22.662 150.064 23.038 150.352 23.518C150.656 23.982 150.864 24.526 150.976 25.15C151.104 25.758 151.168 26.406 151.168 27.094V34.75ZM159.92 34.99C158.944 34.99 158.056 34.822 157.256 34.486C156.472 34.134 155.792 33.662 155.216 33.07C154.64 32.462 154.192 31.774 153.872 31.006C153.568 30.222 153.416 29.39 153.416 28.51C153.416 27.326 153.688 26.246 154.232 25.27C154.776 24.278 155.536 23.486 156.512 22.894C157.488 22.286 158.632 21.982 159.944 21.982C161.256 21.982 162.384 22.286 163.328 22.894C164.288 23.486 165.032 24.27 165.56 25.246C166.088 26.222 166.352 27.27 166.352 28.39C166.352 28.582 166.344 28.766 166.328 28.942C166.312 29.102 166.296 29.238 166.28 29.35H156.224C156.272 30.086 156.472 30.734 156.824 31.294C157.192 31.838 157.656 32.27 158.216 32.59C158.776 32.894 159.376 33.046 160.016 33.046C160.72 33.046 161.384 32.87 162.008 32.518C162.648 32.166 163.08 31.702 163.304 31.126L165.56 31.774C165.288 32.382 164.872 32.934 164.312 33.43C163.768 33.91 163.12 34.294 162.368 34.582C161.616 34.854 160.8 34.99 159.92 34.99ZM156.152 27.598H163.736C163.688 26.878 163.48 26.246 163.112 25.702C162.76 25.142 162.304 24.71 161.744 24.406C161.2 24.086 160.592 23.926 159.92 23.926C159.264 23.926 158.656 24.086 158.096 24.406C157.552 24.71 157.104 25.142 156.752 25.702C156.4 26.246 156.2 26.878 156.152 27.598ZM167.714 28.486C167.714 27.286 167.954 26.198 168.434 25.222C168.93 24.23 169.602 23.446 170.45 22.87C171.298 22.278 172.274 21.982 173.378 21.982C174.338 21.982 175.202 22.23 175.97 22.726C176.754 23.222 177.362 23.838 177.794 24.574V17.23H180.434V31.774C180.434 32.078 180.49 32.294 180.602 32.422C180.714 32.55 180.898 32.622 181.154 32.638V34.75C180.658 34.83 180.274 34.87 180.002 34.87C179.506 34.87 179.082 34.726 178.73 34.438C178.394 34.15 178.218 33.806 178.202 33.406L178.178 32.47C177.698 33.27 177.05 33.894 176.234 34.342C175.418 34.774 174.57 34.99 173.69 34.99C172.826 34.99 172.026 34.822 171.29 34.486C170.57 34.15 169.938 33.678 169.394 33.07C168.866 32.462 168.45 31.766 168.146 30.982C167.858 30.198 167.714 29.366 167.714 28.486ZM177.794 30.238V26.95C177.618 26.438 177.33 25.982 176.93 25.582C176.546 25.166 176.106 24.838 175.61 24.598C175.13 24.358 174.65 24.238 174.17 24.238C173.61 24.238 173.098 24.358 172.634 24.598C172.186 24.838 171.794 25.158 171.458 25.558C171.138 25.958 170.89 26.414 170.714 26.926C170.538 27.438 170.45 27.974 170.45 28.534C170.45 29.11 170.546 29.654 170.738 30.166C170.93 30.662 171.202 31.11 171.554 31.51C171.922 31.894 172.338 32.198 172.802 32.422C173.282 32.63 173.802 32.734 174.362 32.734C174.714 32.734 175.066 32.67 175.418 32.542C175.786 32.414 176.13 32.238 176.45 32.014C176.786 31.79 177.066 31.526 177.29 31.222C177.53 30.918 177.698 30.59 177.794 30.238ZM183.667 29.878V22.198H186.307V29.35C186.307 30.47 186.507 31.318 186.907 31.894C187.323 32.454 187.923 32.734 188.707 32.734C189.203 32.734 189.683 32.63 190.147 32.422C190.627 32.214 191.059 31.91 191.443 31.51C191.843 31.094 192.163 30.598 192.403 30.022V22.198H195.043V31.774C195.043 32.078 195.099 32.294 195.211 32.422C195.323 32.55 195.507 32.622 195.763 32.638V34.75C195.491 34.798 195.267 34.83 195.091 34.846C194.915 34.862 194.747 34.87 194.587 34.87C194.107 34.87 193.707 34.742 193.387 34.486C193.067 34.214 192.883 33.87 192.835 33.454L192.787 32.206C192.227 33.118 191.499 33.814 190.603 34.294C189.707 34.758 188.723 34.99 187.651 34.99C186.339 34.99 185.347 34.558 184.675 33.694C184.003 32.83 183.667 31.558 183.667 29.878ZM198.436 17.23H201.076V31.126C201.076 31.766 201.172 32.174 201.364 32.35C201.556 32.526 201.796 32.614 202.084 32.614C202.404 32.614 202.7 32.582 202.972 32.518C203.26 32.454 203.508 32.374 203.716 32.278L204.1 34.366C203.716 34.526 203.26 34.662 202.732 34.774C202.204 34.886 201.732 34.942 201.316 34.942C200.42 34.942 199.716 34.694 199.204 34.198C198.692 33.686 198.436 32.982 198.436 32.086V17.23ZM211.319 34.99C210.343 34.99 209.455 34.822 208.655 34.486C207.871 34.134 207.191 33.662 206.615 33.07C206.039 32.462 205.591 31.774 205.271 31.006C204.967 30.222 204.815 29.39 204.815 28.51C204.815 27.326 205.087 26.246 205.631 25.27C206.175 24.278 206.935 23.486 207.911 22.894C208.887 22.286 210.031 21.982 211.343 21.982C212.655 21.982 213.783 22.286 214.727 22.894C215.687 23.486 216.431 24.27 216.959 25.246C217.487 26.222 217.751 27.27 217.751 28.39C217.751 28.582 217.743 28.766 217.727 28.942C217.711 29.102 217.695 29.238 217.679 29.35H207.623C207.671 30.086 207.871 30.734 208.223 31.294C208.591 31.838 209.055 32.27 209.615 32.59C210.175 32.894 210.775 33.046 211.415 33.046C212.119 33.046 212.783 32.87 213.407 32.518C214.047 32.166 214.479 31.702 214.703 31.126L216.959 31.774C216.687 32.382 216.271 32.934 215.711 33.43C215.167 33.91 214.519 34.294 213.767 34.582C213.015 34.854 212.199 34.99 211.319 34.99ZM207.551 27.598H215.135C215.087 26.878 214.879 26.246 214.511 25.702C214.159 25.142 213.703 24.71 213.143 24.406C212.599 24.086 211.991 23.926 211.319 23.926C210.663 23.926 210.055 24.086 209.495 24.406C208.951 24.71 208.503 25.142 208.151 25.702C207.799 26.246 207.599 26.878 207.551 27.598Z" fill="#FFEFFB"/>
            </svg>
          </a>

            <p>
              ©2022 Daily Schedule. <br/>
              Todos os direitos reservados.
            </p>
        </div>
      </footer>
  )
}

export default Footer;