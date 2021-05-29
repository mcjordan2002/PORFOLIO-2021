import React from 'react';
import './Preloader.css'
import { Container, Section } from 'react-materialize';

const Preloader = () => {
    return (
        <div className="content">
            <Section className="preloader">
                <Container className="lines-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="808" height="214" viewBox="0 0 808 214" fill="none" id="logo">
                        <g id="Frame 5">
                            <path id="J" d="M193.889 48.3866V133.941C193.889 143.056 192.014 150.262 188.358 155.648C184.81 160.875 178.542 163.613 169.222 163.613C159.916 163.613 153.181 160.879 148.809 155.574C144.376 150.195 142.111 143.018 142.111 133.941V122.597V121.597H141.111H124H123V122.597V133.941C123 149.379 127.054 161.361 135.307 169.727L135.313 169.734L135.319 169.74C143.694 177.945 155.036 182 169.222 182C183.402 182 194.302 177.947 201.742 169.695C209.297 161.327 213 149.357 213 133.941V47.3866V31V30H212H136.019H134.661L135.064 31.2968L140.156 47.6833L140.375 48.3866H141.111H193.889Z" stroke="#2B50AA" stroke-width="2"/>
                            <path id="o" d="M288.949 167.851L288.955 167.845L288.96 167.84C293.519 163.12 297.128 157.41 299.795 150.726C302.606 143.868 304 136.04 304 127.26V124.74C304 116.101 302.607 108.413 299.795 101.694C297.128 94.8696 293.452 89.0872 288.759 84.3652C284.203 79.6492 278.905 76.0724 272.872 73.6412C266.848 71.2137 260.555 70 254 70C247.445 70 241.152 71.2137 235.128 73.6412C229.096 76.0722 223.735 79.6477 219.05 84.3598L219.045 84.365L219.04 84.3702C214.48 89.0907 210.807 94.8698 208.011 101.689L208.01 101.689L208.007 101.698C205.327 108.415 204 116.102 204 124.74V127.26C204 136.036 205.327 143.861 208.004 150.715L208.009 150.726L208.013 150.737C210.811 157.417 214.484 163.123 219.04 167.84L219.045 167.845L219.051 167.851C223.607 172.426 228.903 175.929 234.931 178.359C240.958 180.787 247.316 182 254 182C260.554 182 266.846 180.787 272.868 178.36C279.026 175.932 284.39 172.428 288.949 167.851ZM283.757 109.753L283.761 109.762C285.42 114.256 286.257 119.245 286.257 124.74V127.26C286.257 133.039 285.419 138.239 283.759 142.872C282.093 147.38 279.795 151.256 276.871 154.511C273.947 157.765 270.522 160.269 266.588 162.03C262.79 163.649 258.599 164.466 254 164.466C249.406 164.466 245.148 163.651 241.216 162.03C237.416 160.271 234.055 157.768 231.129 154.511C228.205 151.256 225.907 147.38 224.241 142.872C222.581 138.239 221.743 133.039 221.743 127.26V124.74C221.743 119.245 222.58 114.256 224.239 109.762L224.239 109.762L224.243 109.753C225.91 105.103 228.208 101.16 231.129 97.9088C234.055 94.6526 237.483 92.1475 241.42 90.3861L241.433 90.3803L241.446 90.3742C245.375 88.4813 249.556 87.5344 254 87.5344C258.444 87.5344 262.625 88.4813 266.554 90.3742L266.567 90.3803L266.58 90.3861C270.517 92.1475 273.945 94.6526 276.871 97.9088C279.792 101.16 282.09 105.103 283.757 109.753Z" stroke="#2B50AA" stroke-width="2"/>
                            <path id="r" d="M295.386 72.9373H294.386V73.9373V89.0431V90.0431H295.386H314.665V161.894H293H292V162.894V178V179H293H356.224H357.224V178V162.894V161.894H356.224H332.173V118.835C332.173 114.429 332.63 110.311 333.538 106.478C334.442 102.663 335.855 99.3516 337.767 96.5272C339.673 93.7115 342.012 91.5128 344.786 89.9146C347.66 88.3341 351.064 87.5255 355.031 87.5255C361.14 87.5255 366.252 89.596 370.432 93.7396L370.438 93.7454L370.444 93.751C374.531 97.6723 376.697 104.265 376.697 113.8V114.966L377.849 114.788L394.153 112.271L395.026 112.136L395 111.252C394.598 97.9697 391.314 87.707 385.005 80.6157C378.701 73.5295 370.4 70 360.201 70C354.077 70 348.597 71.4371 343.789 74.3339C339.103 77.0207 335.485 81.1936 332.912 86.7843H332.173V73.9373V72.9373H331.173H295.386Z" stroke="#2B50AA" stroke-width="2"/>
                            <path id="n" d="M595.849 177H596.849V176V122.376C596.849 111.312 599.519 102.621 604.752 96.1972C610.096 89.6646 617.385 86.3804 626.735 86.3804C634.617 86.3804 640.762 88.9879 645.287 94.1458C649.804 99.2946 652.151 107.12 652.151 117.804V176V177H653.151H669H670V176V114.478C670 99.5181 666.516 88.1421 659.368 80.5417C652.243 72.8263 642.682 69 630.799 69C622.929 69 616.166 70.7313 610.558 74.2447C605.106 77.6604 600.81 82.7202 597.651 89.3686H596.849V72.9098V71.9098H595.849H580H579V72.9098V176V177H580H595.849Z" stroke="#2B50AA" stroke-width="2"/>
                            <path id="a" d="M501.809 177.562L501.819 177.566L501.829 177.57C507.556 179.86 513.75 181 520.4 181C526.854 181 532.963 179.268 538.71 175.822C544.483 172.439 548.986 167.287 552.237 160.427H553V160.687C553 165.656 554.469 169.826 557.46 173.116L557.468 173.124L557.476 173.133C560.612 176.424 564.613 178.061 569.4 178.061H580H581V177.061V161.947V160.947H580H575C573.398 160.947 572.365 160.487 571.709 159.721C571.028 158.926 570.6 157.628 570.6 155.649V72.9389V71.9389H569.6H554H553V72.9389V88.313H552.221C548.97 81.866 544.532 77.0622 538.895 73.9591C533.266 70.6482 526.96 69 520 69C513.603 69 507.536 70.2151 501.809 72.6483C496.074 75.0847 491.025 78.6675 486.665 83.3863L486.665 83.3867C482.43 87.9756 479.099 93.6226 476.661 100.306C474.213 107.015 473 114.692 473 123.321V126.679C473 135.446 474.212 143.194 476.661 149.904C479.099 156.585 482.426 162.297 486.655 167.022L486.665 167.033L486.676 167.045C491.035 171.62 496.081 175.128 501.809 177.562ZM534.386 160.826L534.386 160.826L534.374 160.832C530.653 162.583 526.533 163.466 522 163.466C512.798 163.466 505.342 160.284 499.546 153.933C493.89 147.452 491 138.41 491 126.679V123.321C491 117.818 491.786 112.822 493.345 108.324L493.345 108.324L493.348 108.315C494.913 103.66 497.054 99.7923 499.753 96.6883C502.6 93.429 505.89 90.9261 509.626 89.1682C513.347 87.4171 517.467 86.5344 522 86.5344C526.384 86.5344 530.428 87.4803 534.148 89.3653L534.167 89.3748L534.186 89.3836C538.05 91.141 541.329 93.638 544.032 96.8808L544.039 96.8896L544.047 96.8983C546.883 100.146 549.089 104.086 550.652 108.735L550.655 108.743C552.214 113.242 553 118.238 553 123.74V126.26C553 131.902 552.214 137.04 550.654 141.68C549.089 146.196 546.945 150.074 544.232 153.329C541.529 156.572 538.25 159.069 534.386 160.826Z" stroke="#2B50AA" stroke-width="2"/>
                            <path id="d" d="M397.076 164.824L397.081 164.83L397.086 164.835C401.579 169.411 406.758 172.919 412.616 175.352C418.48 177.787 424.812 179 431.6 179C434.623 179 437.769 178.568 441.034 177.712C444.315 176.992 447.396 175.841 450.274 174.259C453.289 172.674 456.03 170.658 458.495 168.215C460.966 165.89 463.006 163.181 464.613 160.092H465.4V175.059V176.059H466.4H482H483V175.059V28V27H482H466.4H465.4V28V86.2437H464.62C461.349 79.773 456.699 74.9644 450.669 71.8646C444.656 68.5655 438.161 66.916 431.2 66.916C424.673 66.916 418.475 68.1309 412.616 70.5639C406.75 73 401.633 76.5839 397.27 81.3077C392.901 85.8991 389.437 91.6185 386.866 98.4423C384.281 105.158 383 112.775 383 121.277V124.639C383 133.275 384.213 141.025 386.658 147.874L386.662 147.886L386.667 147.897C389.241 154.585 392.707 160.234 397.076 164.824ZM455.861 151.276L455.854 151.284L455.847 151.292C453.006 154.548 449.654 157.052 445.786 158.813C441.924 160.57 437.733 161.454 433.2 161.454C428.524 161.454 424.262 160.637 420.401 159.017C416.531 157.253 413.112 154.814 410.139 151.696C407.302 148.44 405.033 144.565 403.341 140.056C401.787 135.561 401 130.426 401 124.639V121.277C401 115.775 401.785 110.78 403.341 106.28C405.035 101.768 407.306 97.8895 410.146 94.6322C413.122 91.3726 416.542 88.8671 420.409 87.1059C424.409 85.3447 428.67 84.4622 433.2 84.4622C437.584 84.4622 441.699 85.4089 445.56 87.3013L445.578 87.3103L445.597 87.3185C449.598 89.0809 453.011 91.5846 455.847 94.834L455.854 94.8423L455.861 94.8505C458.83 98.1049 461.167 102.05 462.86 106.703L462.864 106.712C464.55 111.208 465.4 116.199 465.4 121.697V124.218C465.4 129.858 464.549 134.991 462.862 139.628C461.17 144.139 458.834 148.017 455.861 151.276Z" stroke="#2B50AA" stroke-width="2"/>
                            <path id="{" d="M26.0952 23.7213C26.0952 19.4433 27.5397 15.9203 30.4286 13.1522C33.455 10.3841 37.3069 9 41.9841 9H62V22.5889H47.7619C44.0476 22.5889 42.1905 24.4763 42.1905 28.251V88.6462C42.1905 92.9242 40.6773 96.4473 37.6508 99.2154C34.7619 101.984 30.9101 103.368 26.0952 103.368H23.619V105.632H26.0952C30.9101 105.632 34.7619 107.016 37.6508 109.785C40.6773 112.553 42.1905 116.076 42.1905 120.354V180.749C42.1905 184.524 44.0476 186.411 47.7619 186.411H62V200H41.9841C37.3069 200 33.455 198.616 30.4286 195.848C27.5397 193.08 26.0952 189.557 26.0952 185.279V120.165C26.0952 116.516 24.2381 114.692 20.5238 114.692H10V94.3083H20.5238C24.2381 94.3083 26.0952 92.4839 26.0952 88.835V23.7213Z" fill="#2B50AA"/>
                            <path id="}" d="M766.905 90.835C766.905 94.4839 768.762 96.3083 772.476 96.3083H783V116.692H772.476C768.762 116.692 766.905 118.516 766.905 122.165V187.279C766.905 191.557 765.392 195.08 762.365 197.848C759.476 200.616 755.693 202 751.016 202H731V188.411H745.238C748.952 188.411 750.81 186.524 750.81 182.749V122.354C750.81 118.076 752.254 114.553 755.143 111.785C758.169 109.016 762.09 107.632 766.905 107.632H769.381V105.368H766.905C762.09 105.368 758.169 103.984 755.143 101.215C752.254 98.4473 750.81 94.9242 750.81 90.6462V30.251C750.81 26.4763 748.952 24.5889 745.238 24.5889H731V11H751.016C755.693 11 759.476 12.3841 762.365 15.1522C765.392 17.9203 766.905 21.4433 766.905 25.7213V90.835Z" fill="#2B50AA"/>
                        </g>
                    </svg>
                </Container>
            </Section>
        </div>
    );
};

export default Preloader;