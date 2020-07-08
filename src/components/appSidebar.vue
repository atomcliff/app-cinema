<template>
    <aside
        class="appSidebar"
        :style="sidebarToggle ? sidebarShow : sidebarHide"
    >
        <div class="appSidebar__profile">
            <div class="appSidebar__avatar">
                <img
                    :src="require('@/assets/images/avatar.jpg')"
                    alt="avatar"
                />
            </div>
            <div class="appSidebar__user">
                <span class="appSidebar__user-fullname">Aaron Young</span>
                <a href="#" class="appSidebar__user-btn"></a>
            </div>
        </div>
        <ul class="appSidebar__menu">
            <li>
                <router-link tag="a" :to="{ name: 'movie-popular' }">
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0 10H8V0H0V10ZM0 18H8V12H0V18ZM10 18H18V8H10V18ZM10 0V6H18V0H10Z"
                            fill="#56657F"
                        />
                    </svg>
                    <span>Популярные</span>
                </router-link>
            </li>
            <li>
                <router-link tag="a" :to="{ name: 'appMovie-favourites' }">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM16 12H4V10H16V12ZM16 9H4V7H16V9ZM16 6H4V4H16V6Z"
                            fill="#56657F"
                        />
                    </svg>
                    <span>Избранное</span>
                </router-link>
            </li>
            <li>
                <a href="#">
                    <svg
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M16 2H11.82C11.4 0.84 10.3 0 9 0C7.7 0 6.6 0.84 6.18 2H2C0.9 2 0 2.9 0 4V18C0 19.1 0.9 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2ZM9 2C9.55 2 10 2.45 10 3C10 3.55 9.55 4 9 4C8.45 4 8 3.55 8 3C8 2.45 8.45 2 9 2ZM11 16H4V14H11V16ZM14 12H4V10H14V12ZM14 8H4V6H14V8Z"
                            fill="#56657F"
                        />
                    </svg>
                    <span>My Tasks</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <svg
                        width="22"
                        height="14"
                        viewBox="0 0 22 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M15 6C16.66 6 17.99 4.66 17.99 3C17.99 1.34 16.66 0 15 0C13.34 0 12 1.34 12 3C12 4.66 13.34 6 15 6ZM7 6C8.66 6 9.99 4.66 9.99 3C9.99 1.34 8.66 0 7 0C5.34 0 4 1.34 4 3C4 4.66 5.34 6 7 6ZM7 8C4.67 8 0 9.17 0 11.5V14H14V11.5C14 9.17 9.33 8 7 8ZM15 8C14.71 8 14.38 8.02 14.03 8.05C15.19 8.89 16 10.02 16 11.5V14H22V11.5C22 9.17 17.33 8 15 8Z"
                            fill="#56657F"
                        />
                    </svg>

                    <span>Clients</span>
                </a>
            </li>
        </ul>
        <div class="appSidebar__settings">
            <span class="appSidebar__settings-title">Settings</span>
            <ul>
                <li>
                    <a href="#">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M17.4301 10.98C17.4701 10.66 17.5001 10.34 17.5001 10C17.5001 9.66 17.4701 9.34 17.4301 9.02L19.5401 7.37C19.7301 7.22 19.7801 6.95 19.6601 6.73L17.6601 3.27C17.5401 3.05 17.2701 2.97 17.0501 3.05L14.5601 4.05C14.0401 3.65 13.4801 3.32 12.8701 3.07L12.4901 0.42C12.4601 0.18 12.2501 0 12.0001 0H8.00008C7.75008 0 7.54008 0.18 7.51008 0.42L7.13008 3.07C6.52008 3.32 5.96008 3.66 5.44008 4.05L2.95008 3.05C2.72008 2.96 2.46008 3.05 2.34008 3.27L0.340084 6.73C0.210084 6.95 0.270084 7.22 0.460084 7.37L2.57008 9.02C2.53008 9.34 2.50008 9.67 2.50008 10C2.50008 10.33 2.53008 10.66 2.57008 10.98L0.460084 12.63C0.270084 12.78 0.220084 13.05 0.340084 13.27L2.34008 16.73C2.46008 16.95 2.73008 17.03 2.95008 16.95L5.44008 15.95C5.96008 16.35 6.52008 16.68 7.13008 16.93L7.51008 19.58C7.54008 19.82 7.75008 20 8.00008 20H12.0001C12.2501 20 12.4601 19.82 12.4901 19.58L12.8701 16.93C13.4801 16.68 14.0401 16.34 14.5601 15.95L17.0501 16.95C17.2801 17.04 17.5401 16.95 17.6601 16.73L19.6601 13.27C19.7801 13.05 19.7301 12.78 19.5401 12.63L17.4301 10.98ZM10.0001 13.5C8.07008 13.5 6.50008 11.93 6.50008 10C6.50008 8.07 8.07008 6.5 10.0001 6.5C11.9301 6.5 13.5001 8.07 13.5001 10C13.5001 11.93 11.9301 13.5 10.0001 13.5Z"
                                fill="#56657F"
                            />
                        </svg>
                        <span>Main Settings</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM14 10H10V14H8V10H4V8H8V4H10V8H14V10Z"
                                fill="#56657F"
                            />
                        </svg>
                        <span>Integrations</span>
                    </a>
                </li>
            </ul>
        </div>
        <span
            class="appSidebar__flag"
            @click="sidebarToggle = !sidebarToggle"
        ></span>
    </aside>
</template>

<script>
export default {
    data() {
        return {
            sidebarToggle: window.innerWidth >= 992 ? true : false,
        };
    },
    computed: {
        sidebarShow() {
            return {
                transform: "translateX(" + 0 + ")",
            };
        },
        sidebarHide() {
            return {
                transform: "translateX(" + -190 + "px" + ")",
            };
        },
    },
};
</script>

<style lang="scss">
.appSidebar {
    min-height: 100vh;
    max-width: 255px;
    position: relative;
    background: #212936;
    transition: transform 0.5s;
    &__flag {
        display: none;
        width: 0;
        height: 0;
        position: absolute;
        right: -30px;
        top: 30px;
        border-top: 15px solid transparent;
        border-left: 30px solid #d0d4dc;
        border-bottom: 15px solid transparent;
        z-index: 5;
    }
    &__profile {
        padding: 40px 16px 15px 16px;
    }
    &__avatar {
        height: 40px;
        width: 40px;
        margin-bottom: 25px;
        border-radius: 50%;
        overflow: hidden;
    }
    &__user {
        display: flex;
        justify-content: space-between;
        align-items: center;
        &-fullname {
            color: #afbdd1;
            font-size: 20px;
        }
        &-btn {
            display: inline-block;
            width: 0;
            height: 0;
            margin: 0 0 0 auto;
            margin: 0 8px 0 0;
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            border-top: 6px solid #56657f;
        }
    }
    &__menu {
        padding: 12px 8px;
        border-top: 1px solid #313c4e;
        li {
            border-radius: 4px;
            color: #56657f;
            &:hover {
                background: #2b3648;
                transition: background 0.3s;
            }
            a {
                display: flex;
                align-items: center;
                transition: color 0.3s;
                padding: 8px;
                span {
                    padding: 0 0 0 35px;
                }
            }
            &:hover a {
                color: #1976d2;
                svg path {
                    fill: #1976d2;
                }
            }
        }
    }
    &__settings {
        padding: 12px 8px;
        border-top: 1px solid #313c4e;
        &-title {
            display: inline-block;
            color: #56657f;
            margin: 0 0 15px 0;
        }
        ul li {
            border-radius: 4px;
            color: #56657f;
            &:hover {
                background: #2b3648;
                transition: background 0.3s;
            }
            a {
                display: flex;
                align-items: center;
                transition: color 0.3s;
                padding: 8px;
                span {
                    padding: 0 0 0 35px;
                }
            }
            &:hover a {
                color: #1976d2;
                svg path {
                    fill: #1976d2;
                }
            }
        }
    }
}

@media screen and(max-width: 992px) {
    .appSidebar {
        position: fixed;
        height: 100%;
        z-index: 5;
        &__flag {
            display: inline-block;
        }
    }
}
</style>
