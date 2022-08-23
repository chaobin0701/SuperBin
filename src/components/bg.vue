<template>
    <div class="back">
        <div class="bakc-left">
            <div class="back-left-item-1"></div>
            <div class="back-left-item-2"></div>
            <div class="back-left-item-3"></div>
        </div>
        <div class="bakc-right">
            <div class="back-right-item-1"></div>
            <div class="back-right-item-2"></div>
            <div class="back-right-item-3"></div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
.back {
    pointer-events: none;
    width: 100%;
    background-color: #fff;
}
.bakc-left {
    pointer-events: none;
    position: absolute;
    overflow: hidden;
    width: 50%;
    height: 400px;
    bottom: 0px;
    left: 0;
}
.bakc-left > div {
    width: 120%;
    height: 200px;
    position: absolute;
    bottom: -200px;
    left: -20%;
    transform-origin: 100% 0%;
}
.bakc-left .back-left-item-1 {
    animation: zl_4 3s ease forwards;
    z-index: 4;
    background-color: #6fc0f2;
}
.bakc-left .back-left-item-2 {
    animation: zl_8 3s ease forwards;
    z-index: 3;
    background-color: #97d0f3;
}
.bakc-left .back-left-item-3 {
    animation: zl_12 3s ease forwards;
    z-index: 2;
    background-color: #ceedfa;
}
@keyframes zl_4 {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(4deg);
    }
}
@keyframes zl_8 {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(8deg);
    }
}
@keyframes zl_12 {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(12deg);
    }
}
/* -------------------------------- */
.bakc-right {
    pointer-events: none;
    position: absolute;
    overflow: hidden;
    width: 50%;
    height: 400px;
    bottom: 0px;
    right: 0;
}
.bakc-right > div {
    width: 120%;
    height: 200px;
    position: absolute;
    bottom: -200px;
    transform-origin: 0% 0%;
}
.bakc-right .back-right-item-1 {
    animation: zl_-4 3s ease forwards;
    z-index: 4;
    background-color: #6fc0f2;
}
.bakc-right .back-right-item-2 {
    animation: zl_-8 3s ease forwards;
    z-index: 3;
    background-color: #97d0f3;
}
.bakc-right .back-right-item-3 {
    animation: zl_-12 3s ease forwards;
    z-index: 2;
    background-color: #ceedfa;
}
@keyframes zl_-4 {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(-4deg);
    }
}
@keyframes zl_-8 {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(-8deg);
    }
}
@keyframes zl_-12 {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(-12deg);
    }
}
</style>