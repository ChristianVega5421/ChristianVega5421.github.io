import {Element} from "react-scroll";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faDocker,
    faGit,
    faGithub,
    faGolang,
    faJava,
    faJira,
    faJs,
    faLinkedin,
    faReact
} from "@fortawesome/free-brands-svg-icons";
import {ReactElement, useEffect, useState} from "react";

type Technology = {
    name: string,
    icon: ReactElement
}

const Content = () => {
    const [technologies, setTechnologies] = useState<Technology[]>([])

    const mouseEnter = (e) => {
        const children = e.target.children[0]
        if (children) {
            const target = children.getElementsByTagName('path')
            Array.from(target).forEach((node) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                node.classList.add('hover-path');
            })
        }
    }

    const mouseLeave = (e) => {
        const children = e.target.children[0]
        if (children) {
            const target = children.getElementsByTagName('path')
            Array.from(target).forEach((node) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                node.classList.remove('hover-path');
            })
        }
    }

    const SaveInfo = () => {
        alert('not implmenented..yet')
    }

    useEffect(() => {
        setTechnologies(
            [{
                'name': 'Golang',
                'icon': <FontAwesomeIcon icon={faGolang} size="2xl"></FontAwesomeIcon>
            },
                {
                    'name': 'Java',
                    'icon': <FontAwesomeIcon icon={faJava} size="2xl"></FontAwesomeIcon>
                },
                {
                    'name': 'C# / .NET',
                    'icon': <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                 version="1.1" width="20" height="20" viewBox="0 0 256 256" xmlSpace="preserve">
                        <g className="g-style"
                           transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                            <rect x="61.6" y="42.5" rx="0" ry="0" width="5" height="5" className="rect-style"
                                  transform=" matrix(1 0 0 1 0 0) "/>
                            <path
                                d="M 82.702 21.231 L 46.734 0.465 c -1.073 -0.619 -2.395 -0.619 -3.468 0 L 7.298 21.231 c -1.073 0.62 -1.734 1.764 -1.734 3.003 v 41.532 c 0 1.239 0.661 2.384 1.734 3.003 l 35.968 20.766 c 1.073 0.62 2.395 0.62 3.468 0 l 35.968 -20.766 c 1.073 -0.62 1.734 -1.764 1.734 -3.003 V 24.234 C 84.436 22.995 83.775 21.85 82.702 21.231 z M 39.153 58.328 c 3.17 0 6.243 -1.135 8.653 -3.197 l 5.961 6.97 c -4.07 3.482 -9.26 5.399 -14.614 5.399 c -12.407 0 -22.5 -10.093 -22.5 -22.5 c 0 -12.407 10.093 -22.5 22.5 -22.5 c 5.354 0 10.544 1.918 14.614 5.399 l -5.961 6.97 c -2.411 -2.061 -5.485 -3.197 -8.653 -3.197 c -7.35 0 -13.329 5.979 -13.329 13.329 C 25.824 52.349 31.803 58.328 39.153 58.328 z M 73.348 42.5 h -3.75 v 5 h 3.75 v 3 h -3.75 v 3.75 h -3 V 50.5 h -5 v 3.75 h -3 V 50.5 h -3.75 v -3 h 3.75 v -5 h -3.75 v -3 h 3.75 v -3.75 h 3 v 3.75 h 5 v -3.75 h 3 v 3.75 h 3.75 V 42.5 z"
                                className="path-style" transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"/>
                        </g>
                    </svg>
                },
                {
                    'name': 'JavaScript',
                    'icon': <FontAwesomeIcon icon={faJs} size="2xl"></FontAwesomeIcon>
                },
                {
                    'name': 'Typescript',
                    'icon': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="40px" height="40px">
                        <path className="global-svg"
                              d="M 5 4 A 1.0001 1.0001 0 0 0 4 5 L 4 45 A 1.0001 1.0001 0 0 0 5 46 L 45 46 A 1.0001 1.0001 0 0 0 46 45 L 46 5 A 1.0001 1.0001 0 0 0 45 4 L 5 4 z M 6 6 L 44 6 L 44 44 L 6 44 L 6 6 z M 15 23 L 15 26.445312 L 20 26.445312 L 20 42 L 24 42 L 24 26.445312 L 29 26.445312 L 29 23 L 15 23 z M 36.691406 23.009766 C 33.576782 22.997369 30.017578 23.941219 30.017578 28.324219 C 30.017578 34.054219 37.738281 34.055625 37.738281 36.640625 C 37.738281 36.885625 37.842187 38.666016 35.117188 38.666016 C 32.392187 38.666016 30.121094 36.953125 30.121094 36.953125 L 30.121094 41.111328 C 30.121094 41.111328 42.001953 44.954062 42.001953 36.289062 C 42.000953 30.664063 34.208984 30.945391 34.208984 28.150391 C 34.208984 27.067391 34.978375 26.054687 37.109375 26.054688 C 39.240375 26.054688 41.126953 27.3125 41.126953 27.3125 L 41.267578 23.607422 C 41.267578 23.607422 39.113892 23.019408 36.691406 23.009766 z"/>
                    </svg>
                },
                {
                    'name': 'React',
                    'icon': <FontAwesomeIcon icon={faReact} size="2xl"></FontAwesomeIcon>
                },
                {
                    'name': 'Jira',
                    'icon': <FontAwesomeIcon icon={faJira} size="2xl"></FontAwesomeIcon>
                },
                {
                    'name': 'Git',
                    'icon': <FontAwesomeIcon icon={faGit} size="2xl"></FontAwesomeIcon>
                },
                {
                    'name': 'Docker',
                    'icon': <FontAwesomeIcon icon={faDocker} size="2xl"></FontAwesomeIcon>
                },
                {
                    'name': 'Mysql',
                    'icon': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="40px" height="40px">
                        <path className="global-svg"
                              d="M 31.167969 8 C 30.699219 7.988281 30.289063 8.167969 30.078125 8.6875 C 29.71875 9.558594 30.613281 10.410156 30.933594 10.855469 C 31.15625 11.164063 31.445313 11.511719 31.605469 11.859375 C 31.710938 12.089844 31.726563 12.320313 31.816406 12.5625 C 32.039063 13.160156 32.394531 13.839844 32.679688 14.394531 C 32.824219 14.675781 32.984375 14.96875 33.167969 15.21875 C 33.28125 15.371094 33.472656 15.441406 33.503906 15.675781 C 33.316406 15.941406 33.304688 16.351563 33.199219 16.6875 C 32.722656 18.191406 32.902344 20.0625 33.59375 21.171875 C 33.808594 21.515625 34.3125 22.246094 35 21.96875 C 35.601563 21.722656 35.46875 20.960938 35.640625 20.285156 C 35.679688 20.136719 35.65625 20.023438 35.734375 19.921875 L 35.734375 19.953125 C 35.914063 20.320313 36.097656 20.6875 36.28125 21.050781 C 36.691406 21.707031 37.414063 22.390625 38.023438 22.855469 C 38.339844 23.09375 38.589844 23.507813 39 23.648438 L 39 23.617188 L 38.96875 23.617188 C 38.890625 23.492188 38.765625 23.441406 38.664063 23.34375 C 38.425781 23.109375 38.160156 22.816406 37.964844 22.546875 C 37.40625 21.792969 36.914063 20.964844 36.46875 20.105469 C 36.253906 19.695313 36.066406 19.242188 35.886719 18.824219 C 35.816406 18.660156 35.816406 18.417969 35.671875 18.332031 C 35.472656 18.640625 35.183594 18.886719 35.03125 19.25 C 34.789063 19.828125 34.753906 20.535156 34.664063 21.265625 C 34.609375 21.285156 34.632813 21.269531 34.605469 21.296875 C 34.179688 21.191406 34.027344 20.753906 33.871094 20.378906 C 33.472656 19.429688 33.394531 17.898438 33.75 16.808594 C 33.839844 16.523438 34.25 15.632813 34.085938 15.371094 C 34.007813 15.109375 33.742188 14.960938 33.597656 14.761719 C 33.414063 14.515625 33.234375 14.191406 33.109375 13.90625 C 32.78125 13.164063 32.472656 12.304688 32.125 11.554688 C 31.960938 11.195313 31.683594 10.835938 31.453125 10.515625 C 31.199219 10.164063 30.917969 9.90625 30.71875 9.476563 C 30.652344 9.328125 30.554688 9.085938 30.660156 8.929688 C 30.691406 8.824219 30.738281 8.78125 30.84375 8.746094 C 31.019531 8.609375 31.511719 8.789063 31.699219 8.867188 C 32.1875 9.070313 32.597656 9.265625 33.011719 9.539063 C 33.210938 9.671875 33.410156 9.925781 33.652344 10 L 33.925781 10 C 34.359375 10.097656 34.839844 10.027344 35.238281 10.152344 C 35.949219 10.367188 36.585938 10.703125 37.160156 11.066406 C 38.921875 12.175781 40.363281 13.757813 41.34375 15.644531 C 41.503906 15.949219 41.574219 16.242188 41.714844 16.5625 C 41.992188 17.210938 42.347656 17.882813 42.628906 18.515625 C 42.90625 19.152344 43.179688 19.789063 43.574219 20.316406 C 43.78125 20.59375 44.585938 20.746094 44.949219 20.898438 C 45.203125 21.007813 45.625 21.121094 45.863281 21.265625 C 46.328125 21.542969 46.773438 21.875 47.207031 22.183594 C 47.425781 22.335938 48.089844 22.667969 48.125 22.945313 C 47.050781 22.917969 46.230469 23.015625 45.53125 23.3125 C 45.332031 23.398438 45.011719 23.398438 44.980469 23.648438 C 45.085938 23.761719 45.105469 23.933594 45.191406 24.074219 C 45.359375 24.34375 45.640625 24.707031 45.894531 24.898438 C 46.171875 25.105469 46.453125 25.328125 46.75 25.511719 C 47.273438 25.828125 47.859375 26.011719 48.367188 26.332031 C 48.664063 26.523438 48.964844 26.761719 49.253906 26.972656 C 49.398438 27.082031 49.492188 27.246094 49.679688 27.3125 L 49.679688 27.28125 C 49.582031 27.15625 49.558594 26.984375 49.46875 26.855469 L 49.066406 26.453125 C 48.679688 25.941406 48.1875 25.488281 47.664063 25.113281 C 47.246094 24.8125 46.3125 24.40625 46.140625 23.921875 L 46.109375 23.890625 C 46.402344 23.859375 46.75 23.75 47.023438 23.675781 C 47.484375 23.554688 47.890625 23.585938 48.363281 23.464844 C 48.578125 23.402344 48.792969 23.339844 49.007813 23.28125 L 49.007813 23.15625 C 48.769531 22.914063 48.597656 22.585938 48.335938 22.363281 C 47.652344 21.78125 46.90625 21.199219 46.136719 20.714844 C 45.710938 20.445313 45.183594 20.269531 44.734375 20.042969 C 44.582031 19.964844 44.316406 19.925781 44.214844 19.796875 C 43.976563 19.496094 43.847656 19.113281 43.664063 18.761719 C 43.28125 18.023438 42.90625 17.21875 42.566406 16.441406 C 42.335938 15.914063 42.183594 15.390625 41.894531 14.914063 C 40.507813 12.636719 39.015625 11.257813 36.703125 9.90625 C 36.210938 9.617188 35.621094 9.507813 34.996094 9.359375 C 34.65625 9.335938 34.324219 9.316406 33.984375 9.296875 C 33.78125 9.210938 33.566406 8.960938 33.375 8.835938 C 32.894531 8.535156 31.949219 8.011719 31.167969 8 Z M 34.476563 11.3125 C 34.253906 11.308594 34.09375 11.339844 33.925781 11.375 L 33.925781 11.40625 L 33.957031 11.40625 C 34.0625 11.625 34.253906 11.765625 34.386719 11.953125 C 34.488281 12.167969 34.585938 12.382813 34.6875 12.597656 L 34.71875 12.566406 C 34.90625 12.433594 34.996094 12.21875 34.996094 11.894531 C 34.917969 11.816406 34.90625 11.714844 34.84375 11.621094 C 34.753906 11.492188 34.585938 11.421875 34.476563 11.3125 Z M 1.867188 23.996094 C 1.566406 24.007813 1.238281 24.066406 0.882813 24.179688 C 0.289063 24.359375 -0.00390625 24.714844 -0.00390625 25.4375 L -0.00390625 33 L 2 33 L 2 25.621094 L 4.777344 31.929688 C 5.121094 32.714844 5.589844 32.996094 6.507813 32.996094 C 7.429688 32.996094 7.878906 32.714844 8.222656 31.929688 L 11 25.78125 L 11 33 L 13 33 L 13 25.4375 C 13 24.714844 12.710938 24.359375 12.113281 24.179688 C 10.691406 23.730469 9.734375 24.117188 9.304688 25.089844 L 6.453125 31.503906 L 3.695313 25.089844 C 3.382813 24.359375 2.757813 23.960938 1.867188 23.996094 Z M 26.246094 24 C 25.457031 24 23 24.09375 23 26 L 23 27.234375 C 23 28.109375 23.769531 28.824219 25.4375 29 C 25.625 29.011719 25.8125 29.027344 26 29.027344 C 26 29.027344 27.945313 28.988281 28 29 C 29.125 29 29 29.875 29 30 L 29 31 C 29 31.136719 28.96875 32 27.988281 32 L 23 32 L 23 33 L 28.007813 33 C 28.664063 33 29.300781 32.863281 29.808594 32.625 C 30.652344 32.238281 31 31.714844 31 31.027344 L 31 29.597656 C 31 28.0625 29.09375 28 28 28 L 26 28 C 25.214844 28 25.09375 27.523438 25 27 L 25 26 C 25.09375 25.601563 25.269531 25.0625 25.964844 25 L 31 25 L 31 24 Z M 33.980469 24 C 32.503906 24.203125 31.984375 24.9375 31.984375 26 L 31.984375 31 C 31.984375 31.972656 32.527344 32.558594 33.644531 32.863281 C 34.019531 32.96875 34.359375 33.011719 34.679688 33.011719 L 36.90625 33 L 38.214844 33 L 39.328125 34 L 41.578125 34 L 40.03125 32.605469 C 40.757813 32.304688 40.984375 31.84375 40.984375 30.980469 L 40.984375 26 C 40.984375 24.9375 40.292969 24.203125 38.816406 24 Z M 42 24 L 42 30.957031 C 42 32.164063 42.683594 32.84375 44.492188 32.980469 C 44.660156 32.988281 44.832031 33 45 33 L 50 33 L 50 32 L 45.378906 32 C 44.347656 32 44 31.566406 44 30.949219 L 44 24 Z M 35.171875 25 L 37.746094 25 C 38.425781 25 38.882813 25.546875 38.984375 26 C 38.984375 26 39 30.65625 39 31 C 39 31.34375 38.808594 31.5 38.808594 31.5 L 38.265625 31 L 36 31 L 37.113281 32 L 35.171875 32 C 34.476563 32 34.085938 31.484375 33.984375 31 L 33.984375 26.101563 C 33.984375 25.570313 34.390625 25 35.171875 25 Z M 14 27 C 14.039063 27.039063 14 31.261719 14 31.34375 C 14.015625 32.21875 15.125 32.984375 16.863281 33 L 20 33 L 20 33.066406 C 20 33.253906 20.136719 33.878906 19 34 C 18.988281 34 14.011719 34 14 34 L 14 35 L 19.214844 35 C 20.097656 34.972656 22.011719 34.773438 22 33.242188 C 22 33.214844 22.007813 27 22 27 L 20 27 L 20 32 C 19.96875 32 17.523438 32.007813 17.03125 32 C 16.066406 31.984375 15.984375 31.433594 16 31.222656 L 16 27 Z"/>
                    </svg>
                },
                {
                    'name': 'Postgresql',
                    'icon': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40px" height="40px">
                        <path className="global-svg"
                              d="M 13 2 C 9.28125 2 8.316406 4.828125 7.992188 6.46875 C 8.4375 6.277344 9.535156 6 10 6 L 10.019531 6 C 11.164063 6.007813 11.519531 6.332031 11.75 7.390625 C 11.917969 8.167969 12.003906 9.378906 12 10 C 11.996094 11.359375 11.667969 12.296875 11.425781 12.925781 L 11.347656 13.128906 C 11.289063 13.296875 11.21875 13.453125 11.15625 13.597656 C 11.09375 13.75 11.039063 13.882813 11 14 C 11.242188 14.054688 11.433594 14.132813 11.5625 14.1875 L 11.636719 14.222656 C 11.660156 14.234375 11.683594 14.242188 11.703125 14.257813 C 12.128906 14.515625 12 15.109375 12 15.578125 C 12 15.96875 12.011719 17.523438 12 19.003906 C 12.042969 19.644531 12.207031 20.183594 12.347656 20.578125 C 12.554688 21.132813 13.019531 21.957031 14 22 C 14.773438 22.035156 15.890625 21.628906 16 20.003906 L 16 16.003906 C 16.074219 14.667969 17.605469 14.136719 18 13.84375 C 17.945313 13.769531 17.734375 13.117188 17.511719 12.769531 L 17.46875 12.6875 C 17.4375 12.609375 17.355469 12.46875 17.253906 12.28125 C 16.664063 11.210938 15.429688 8.464844 16.273438 7.058594 C 16.640625 6.441406 17 6.085938 18 6 C 17.59375 4.839844 16.46875 2.058594 13 2 Z M 6.4375 2 C 4.566406 2.070313 2 3.230469 2 7.011719 C 2 9.574219 3.742188 17 6.492188 17 C 6.617188 17 6.742188 16.957031 6.871094 16.890625 C 6.628906 16.679688 6.453125 16.40625 6.429688 16.046875 C 6.386719 15.320313 6.914063 14.808594 8.050781 14.519531 C 8.105469 14.511719 8.394531 14.425781 9.03125 14.066406 C 8.695313 13.921875 8.34375 13.726563 8.054688 13.425781 C 7.261719 12.597656 6.859375 11.4375 7.007813 10.394531 C 7.148438 9.378906 7.066406 8.382813 7.023438 7.851563 L 7.019531 7.800781 L 7.007813 7.625 L 6.984375 7.257813 L 7.015625 6.273438 C 7.339844 4.609375 8.019531 3.320313 9 2.429688 C 8.257813 2.1875 7.324219 1.96875 6.4375 2 Z M 16.933594 2.003906 C 16.742188 2.007813 16.5625 2.023438 16.386719 2.042969 C 17.390625 2.742188 18.3125 3.871094 18.941406 5.671875 L 18.984375 7.046875 C 18.988281 7.09375 18.996094 7.140625 19.003906 7.1875 C 19.035156 7.359375 19.074219 7.59375 19.042969 7.875 C 19.003906 8.195313 18.964844 8.523438 18.953125 8.851563 C 18.945313 9.175781 18.988281 9.492188 19.035156 9.828125 C 19.121094 10.425781 19.074219 11.03125 18.886719 11.679688 L 18.59375 12.6875 C 18.671875 12.859375 18.746094 13.035156 18.820313 13.21875 C 18.835938 13.265625 18.851563 13.300781 18.863281 13.332031 L 19.191406 13.785156 C 20.957031 12.230469 22 8.976563 22 5.625 C 22 4.976563 21.824219 4.476563 21.597656 4.1875 C 20.257813 2.472656 18.402344 1.980469 16.933594 2.003906 Z M 10 7 C 9.71875 7 8.75 7.230469 8.382813 7.386719 L 8.023438 7.539063 C 8.015625 7.546875 8.007813 7.554688 8.003906 7.5625 C 8.007813 7.617188 8.015625 7.683594 8.023438 7.765625 C 8.066406 8.339844 8.152344 9.40625 7.996094 10.535156 C 7.890625 11.277344 8.191406 12.121094 8.78125 12.734375 C 9.117188 13.085938 9.71875 13.316406 10.15625 13.414063 C 10.183594 13.34375 10.207031 13.285156 10.238281 13.207031 C 10.292969 13.074219 10.355469 12.933594 10.414063 12.777344 L 10.492188 12.566406 C 10.667969 12.109375 10.996094 11.253906 11 9.996094 C 11.003906 9.582031 10.957031 8.828125 10.871094 8.183594 C 10.859375 8.199219 10.851563 8.199219 10.84375 8.21875 C 10.695313 8.367188 10.464844 8.5 10.210938 8.460938 C 9.796875 8.394531 9.480469 7.890625 9.5 7.703125 C 9.523438 7.519531 9.878906 7.421875 10.292969 7.488281 C 10.433594 7.511719 10.566406 7.554688 10.675781 7.601563 C 10.714844 7.632813 10.746094 7.652344 10.78125 7.675781 C 10.777344 7.652344 10.777344 7.625 10.769531 7.601563 C 10.675781 7.160156 10.597656 7.078125 10.59375 7.074219 C 10.589844 7.070313 10.484375 7.003906 10 7 Z M 17.984375 7.011719 C 17.5 7.070313 17.363281 7.199219 17.1875 7.484375 C 17.527344 7.484375 17.773438 7.597656 17.800781 7.808594 C 17.828125 7.988281 17.675781 8.160156 17.609375 8.226563 C 17.46875 8.359375 17.292969 8.449219 17.117188 8.46875 C 17.085938 8.476563 17.054688 8.476563 17.019531 8.476563 C 17.011719 8.476563 17.007813 8.472656 17 8.472656 C 17.058594 9.296875 17.429688 10.410156 17.925781 11.402344 C 18.0625 10.925781 18.117188 10.460938 18.046875 9.96875 C 17.996094 9.605469 17.941406 9.230469 17.953125 8.820313 C 17.96875 8.449219 18.007813 8.101563 18.046875 7.761719 C 18.078125 7.5 17.976563 7.257813 17.984375 7.011719 Z M 20.179688 14.53125 C 20.101563 14.519531 19.992188 14.527344 19.859375 14.554688 C 19.230469 14.683594 18.8125 14.71875 18.503906 14.699219 C 18.394531 14.773438 18.28125 14.84375 18.140625 14.921875 C 17.578125 15.230469 17.078125 15.550781 17.011719 16 L 17.011719 16.582031 C 17.671875 16.613281 18.554688 16.203125 19.0625 15.96875 C 20.019531 15.527344 20.738281 14.605469 20.179688 14.53125 Z M 9.835938 14.761719 C 9.285156 15.089844 8.664063 15.414063 8.25 15.5 C 6.78125 15.890625 7.691406 16.347656 8.210938 16.398438 C 8.765625 16.535156 10.125 16.84375 11 16.128906 C 11 16.128906 11 16.128906 11 16.125 L 11 15.578125 C 11 15.472656 11.003906 15.367188 11.011719 15.253906 C 11.011719 15.195313 11.015625 15.117188 11.015625 15.046875 C 10.949219 15.019531 10.867188 14.996094 10.777344 14.972656 Z"/>
                    </svg>
                }
            ])
    }, [])
    return (
        <div className="content">
            <Element name="about" className="content-container" id="about">
                <div>
                    <h1>Hi, I'm Christian Vega</h1>
                    <p>Software Engineer | Constantly Learning, specializing in building efficient backend systems.</p>
                </div>
                <div className="about-me">
                    <h2>About me</h2>
                    <p>
                        I'm a passionate software developer that has enjoyed this amazing career for a long time. I try
                        to be up to date in the most important aspects in development, especially Backend technology
                        stacks. Its constantly grow thrives me and drives me to read new things and always interested in
                        this field.
                        I hold a Bachelor degree in Software Engineering from the Pontificia Universidad Catolica del
                        Ecuador.
                        Over the past two years I have went through a Web and Interactive Development diploma in
                        Assiniboine College in Brandon Manitoba.
                        In my free time I like to spent time coding my personal projects or reading about new
                        technologies and when I am not interested in technology I spend my time playing video games,
                        watching YouTube videos, reading books or watching movies!
                    </p>
                </div>
            </Element>

            <Element name="projects" className="content-container" id="projects">
                <div>
                    <h2> Experience and Projects</h2>
                    <div className="experience-detail">
                        <div className="title-container">
                            <h3 className="experience-title">IOET Quito, EC
                                <span>Full-stack Developer/ Team-lead</span>
                            </h3>
                            <p>2022 - 2023</p>
                        </div>
                        <ul>
                            <li>Coded back-end APIs for the administrative website.</li>
                            <li>Managed team AWS development server to change images and update configuration as
                                required.
                            </li>
                            <li>Worked with Jira to solve requirements made by the client.</li>
                        </ul>
                        <div className="project-highlight">
                            <h3>Project Highlight</h3>
                            <p>
                                One project I developed in this company was a generic library for database filters. I
                                used Mongo for database and Golang as the back end language. Here I worked with
                                reflection to process the JSON filter that contained the query details in a custom
                                object. The JSON was processed by the library and transformed into it Mongo query
                                equivalent based on the database model. This project was reviewed by a senior developer
                                and all the requirements were defined with the stakeholder. The library went through
                                rigorous testing before being deployed into production.
                            </p>
                        </div>
                    </div>
                    <div className="experience-detail">
                        <div className="title-container">
                            <h3 className="experience-title">Banco Pichincha Quito, EC
                                <span>Back-end Developer</span>
                            </h3>
                            <p>2019 - 2022</p>
                        </div>

                        <ul>
                            <li>Developed the back-end infrastructure for digital account creation with a team of
                                fourteen people.
                            </li>
                            <li>Modeled the migration of a monolith to microservice architecture for the account
                                creation process.
                            </li>
                            <li>Implemented hexagonal architecture structure for project’s file management.</li>
                            <li>Worked with Jira to solve requirements made by the client.</li>
                            <li>Engaged in bank digital transformation and business and software architecture
                                decisions.
                            </li>
                        </ul>
                        <div className="project-highlight">
                            <h3>Project Highlight</h3>
                            <p>
                                I had a requirement to built an Excel batch processor. It would take an Excel file with
                                IDs and process all the registries to gather the clients' information for later run
                                security checks and finally create the bank accounts and generate all the contracts they
                                would have to sign.
                            </p>
                            <p>
                                For this I used Java and Spring Batch to create the asynchronous process. It would
                                connect to different microservices that were in charge of every step the process needed.
                                Finally an Excel file was the result where the executor could see which clients were not
                                processed for an specific reason and the clients with the created accounts. All the
                                generated documents were sent directly to the clients through email or put in a FTP
                                server where the executor could access them and send them manually.
                            </p>
                            <p>
                                Extensive research was about Spring Batch and how it works to develop the feature. While
                                I was working in other requirements, I was investigating how this worked and created
                                small "sandboxes" to put my knowledge into test. Finally, I had to create a proposal to
                                the team and how it would work looking for the Product Owner approval.
                            </p>
                        </div>
                    </div>
                    <div className="experience-detail">
                        <div className="title-container">
                            <h3 className="experience-title">Vimeworks Quito, EC
                                <span>Full-stack developer</span>
                            </h3>
                            <p>2017 - 2018</p>
                        </div>
                        <ul>
                            <li>Developed a web application to follow up the deployment process (dev to prod) of the
                                company’s software.
                            </li>
                            <li>Developed a web application for sales force to follow their insurance sales.</li>
                            <li>Developed an Excel comparator for accounting adjustments.</li>
                            <li>Developed multiple webpages for travel insurance and student insurance sales.</li>
                        </ul>
                        <div className="project-highlight">
                            <h3>Project Highlight</h3>
                            <p>
                                The Excel comparator project was requested by the accounting department since they had
                                to run the comparison of values between multiple records and files to identify the
                                clients' that owned insurance payments to the company. In some cases they spent a long
                                time in this task and they wanted a fastest and automatic way to process this.
                            </p>
                            <p>
                                The research phase started with collecting the requirements and details about how the
                                file was structured and how was the manual process. Afterwards, the technology stack was
                                defined with the software architect to built the solution and the final delivery would
                                be a daemon that would listen to changes in a shared folder, get the copied file and
                                processed. This file had an specific template that the accounting department had to
                                follow for the daemon to work properly. It would take the information from different
                                sheets in the same file, compare and do the math operations to get the report in a new
                                sheet. The same file would be copied to a different folder where the personnel would
                                have access with the details of the process, inconsistencies in the information, and the
                                final calculations they needed.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Technologies and Tools</h2>
                    <div className="technologies-container">
                        {technologies.map((technology, index) => (
                            <div key={index}
                                 onMouseEnter={mouseEnter}
                                 onMouseLeave={mouseLeave}>
                                {technology.icon}
                                <p>{technology.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Element>
            <Element name="contact" className="content-container" id="contact">
                <h2>Contact</h2>
                <div className="contact">
                    <div className="form">
                        <div className="form-container">
                            <label>Name</label>
                            <input type="email" id="email" name="email"/>
                        </div>
                        <div className="form-container">
                            <label>Email</label>
                            <input type="email" id="email" name="email"/>
                        </div>
                        <button onClick={SaveInfo}>Send</button>
                    </div>
                    <div className="contact-detail">
                        <div>
                            <h3>Email</h3>
                            <p>steeper.5421@gmail.com</p>
                        </div>
                        <div>
                            <h3>Social Networks</h3>
                            <div className="social-networks">
                                <a href="https://github.com/ChristianVega5421"
                                   target="_blank"><FontAwesomeIcon
                                    icon={faGithub} size={"2x"}/></a>
                                <a href="https://www.linkedin.com/in/christian-vega-14b819141"
                                   target="_blank"><FontAwesomeIcon
                                    icon={faLinkedin} size={"2x"}/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        </div>
    )
}
export default Content
