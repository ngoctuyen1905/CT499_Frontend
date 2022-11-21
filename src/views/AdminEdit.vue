<template>
    <div style="display: flex;">
        <div v-if="admin" class="page">
            <h4 style="font-weight:700 ;text-align: center;">Hiệu chỉnh thông tin</h4>
            <AdminForm :admin="admin" @submit:admin="updateAdmin" @delete:admin="deleteAdmin" />
            <p>{{ message }}</p>
        </div>
    </div>
</template>

<script>
    import AdminForm from "@/components/AdminForm.vue";
    import AdminService from "@/services/admin.service";
    export default {
        components: {
            AdminForm,
        },
        props: {
            id: { type: String, required: true },
        },
        data() {
            return {
                admin: null,
                message: "",
            };
        },
        methods: {
            async getAdmin(id) {
                try {
                    this.admin = await AdminService.get(id);
                } catch (error) {
                    console.log(error);
                // Chuyển sang trang NotFound đồng thời giữ cho URL không đổi
                    this.$router.push({
                        name: "notfound",
                        params: {
                        pathMatch: this.$route.path.split("/").slice(1)
                        },
                        query: this.$route.query,
                        hash: this.$route.hash,
                    });
                }
            },
            async updateAdmin(data) {
                try {
                    await AdminService.update(this.admin._id, data);
                    alert("Thông tin được cập nhật thành công.");
                    // this.message = "Liên hệ được cập nhật thành công.";
                } catch (error) {
                    console.log(error);
                }
            },
            async deleteAdmin() {
                if (confirm("Bạn muốn xóa thông tin này?")) {
                    try {
                        await AdminService.delete(this.admin._id);
                        this.$router.push({ name: "Admin" });
                    } catch (error) {
                        console.log(error);
                    }
                }
            },
        },
        created() {
        this.getAdmin(this.id);
        this.message = "";
        },
    };
</script>