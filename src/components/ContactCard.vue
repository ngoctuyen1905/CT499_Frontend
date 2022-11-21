<script>
    export default {
        props: {
            contact: { type: Object, required: true },
        },
    };
</script>

<template>
    <div>
        <div class="p-1">
            <strong>Tên sản phẩm:</strong>
            {{ contact.name }}
        </div>
        <div class="p-1">
            <strong></strong>
            <!-- {{ contact.hinh }} -->
            <img v-bind:src="contact.hinh" class="card-img-top" alt="..."
                style="height:350px ;width: 60%;display: block; margin-left: auto; margin-right: auto;">
        </div>
        <div class="p-1">
            <strong>Mô tả về sản phẩm:</strong>
            {{ contact.mota }}
        </div>
        <div class="p-1" style="font-weight:700 ;font-size: 20px;color: orangered; float: right;">
            <strong>Giá:</strong>
            {{ contact.gia }} VNĐ
        </div>
        <div class="p-1">
            <strong>Liên hệ yêu thích:&nbsp;</strong>
            <i v-if="contact.favorite" class="fas fa-check"></i>
            <i v-else class="fas fa-times"></i>
        </div>
    </div>
</template>