<template>
    <button class="btn">
        <slot name="icon"></slot>
        <slot name="name">button</slot>
    </button>
</template>

<style>
.btn {
    height: 48px;
    padding: 10px 20px;
    border-radius: 5px;
    background: #049be8;
    border: 0;
    cursor: pointer;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
