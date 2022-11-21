<template>
    <div class="container" style="display:flex ;">
        <br />
        <div v-if="contact" class="page">
            <h4 style="font-weight:700 ;text-align: center;">Thêm sản phẩm mới</h4>
            <ContactForm :contact="contact"
             @submit:contact="createContact" />
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
        // id: { type: String, required: true },
    },
    data() {
        return {
            contact: {},
            message: "",
        };
    },
    methods: {
        async createContact(data) {
            try {
                await ContactService.create(data);
                alert("Sản phẩm đã được thêm thành công.");
                
            } catch (error) {
                console.log(error);
            }
        },
    },
    created() {
        // this.getContact(this.id);
        this.message = "";
    },
};
</script>