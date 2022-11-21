<script>
export default {
    props: {
        admin: { type: Object, required: true },
    },
};
</script>

<template>
    <div class="container" style="text-align: center; font-family: 'Times New Roman', Times, serif; font-size: 20px;">
        <div class="p-1">
            <strong>Tên:</strong>
            {{ admin.name }}
        </div>
        <div class="p-1">
            <strong>E-mail:</strong>
            {{ admin.email }}
        </div>
        <div class="p-1">
            <strong>Địa chỉ:</strong>
            {{ admin.address }}
        </div>
        <div class="p-1">
            <strong>Điện thoại:</strong>
            {{ admin.phone }}
        </div>
        <!-- <div class="p-1">
            <strong>Liên hệ yêu thích:&nbsp;</strong>
            <i v-if="admin.favorite" class="fas fa-check"></i>
            <i v-else class="fas fa-times"></i>
        </div> -->
    </div>
</template>