<script>
    export default {
        props: {
            admins: { type: Array, default: [] },
            activeIndex: { type: Number, default: -1 },
        },
        emits: ["update:activeIndex"],
        methods: {
            updateActiveIndex(index) {
                this.$emit("update:activeIndex", index);
            }
        }
    };
</script>

<template>
    
    <ul class="list-group" >
        <li 
            class="list-group-item"
            v-for="(admin, index) in admins"
            :key="admin._id"
            :class="{ active: index === activeIndex }" 
            @click="updateActiveIndex(index)"
            
        >
            {{ admin.name }}  {{ index }}
        </li>
    </ul>
    <!-- <div>
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
        <div class="p-1">
            <strong>Liên hệ yêu thích:&nbsp;</strong>
            <i v-if="admin.favorite" class="fas fa-check"></i>
            <i v-else class="fas fa-times"></i>
        </div>
    </div>
     -->
</template>