<script>
export default {
    props: {
        contacts: { type: Array, default: [] },
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
    <div class="container">
        <table class="table ">
            <thead>
                <tr>
                    <th scope="col">Stt</th>
                    <th scope="col">Hình sản phẩm</th>
                    <th scope="col">Tên sản phẩm</th>
                    <th scope="col">Mô tả sản phẩm</th>
                    <th scope="col">Giá sản phẩm</th>
                    <th scope="col">Chi tiết sản phẩm</th>
                    <th scope="col">Chỉnh sửa</th>
                </tr>
            </thead>
            <tbody v-for="(contact, index) in contacts" :key="contact._id" :class="{ active: index === activeIndex }"
            @click="updateActiveIndex(index)">
                <tr style="text-align: center;padding: 10px;">
                    <th scope="row">{{ index }}</th>
                    <td ><img v-bind:src="contact.hinh" class="card-img-top" alt="..." style="height:80px ;width: 80px;"></td>
                    <td>{{ contact.name }}</td>
                    <td>{{ contact.mota}}</td>
                    <td>{{ contact.gia}} VNĐ</td>
                    <!-- {{contact._id}} -->
                    <td class="btn btn-success " data-bs-toggle="modal" data-bs-target="#myModal" style="margin-top: 10px;">Xem chi tiết</td>
                    <td >
                        <router-link :to="{
                            name: 'contact.edit',
                            params: { id: contact._id },
                            }">
                            <i class='fas fa-edit' style="font-size:20px;background-color:greenyellow;padding: 10px;"></i>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div> 
</template>
