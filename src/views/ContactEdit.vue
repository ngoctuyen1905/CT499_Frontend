<template>
    <div class="container" style="display:flex ;">
        <br />
        <div v-if="contact" class="page" >
            <h4 style="font-weight:700 ;text-align: center;">Hiệu chỉnh Sản phẩm </h4>
            <ContactForm :contact="contact" 
            @submit:contact="updateContact" 
            @delete:contact="deleteContact"
            
            />
            <p>{{ message }}</p>
        </div>
    </div>
</template>

<script>
    import ContactForm from "@/components/ContactForm.vue";
    import ContactService from "@/services/contact.service";
    export default {
        components: {
            ContactForm,
        },
        props: {
            id: { type: String, required: true },
        },
        data() {
            return {
                contact: null,
                message: "",
            };
        },
        methods: {
            async getContact(id) {
                try {
                    this.contact = await ContactService.get(id);
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
            async updateContact(data) {
                try {
                    await ContactService.update(this.contact._id, data);
                    alert("Sản phẩm được cập nhật thành công.");
                    // this.message = "Liên hệ được cập nhật thành công.";
                } catch (error) {
                    console.log(error);
                }
            },
            async deleteContact() {
                if (confirm("Bạn muốn xóa sản phẩm này?")) {
                    try {
                        await ContactService.delete(this.contact._id);
                        this.$router.push({ name: "contactbook" });
                    } catch (error) {
                        console.log(error);
                    }
                }
            },
        },
        created() {
        this.getContact(this.id);
        this.message = "";
        },
    };
</script>