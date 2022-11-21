<template>
    <Form
        @submit="submitContact"
        :validation-schema="contactFormSchema"
        style="margin-left: -22%;"
    >
        <div class="form-group">
            <label for="name">Tên</label>
            <Field
                name="name"
                type="text"
                class="form-control"
                v-model="contactLocal.name"
                style="width: 600px;"
            />
            <ErrorMessage name="name" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for>Hình ảnh</label>
            <Field
                name="hinh"
                type="hinh"
                class="form-control"
                v-model="contactLocal.hinh"
                style="width: 600px;"
            />
            <ErrorMessage name="hinh" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="mota">Mô tả sản phẩm</label>
            <Field
                name="mota"
                type="text"
                class="form-control"
                v-model="contactLocal.mota"
                style="width: 600px;"
            />
            <ErrorMessage name="mota" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="gia">Giá</label>
                <Field
                name="gia"
                type="text"
                class="form-control"
                v-model="contactLocal.gia"
                style="width: 600px;"
            />
            <ErrorMessage name="gia" class="error-feedback" />
        </div>
        <div class="form-group form-check">
            <input
                name="favorite"
                type="checkbox"
                class="form-check-input"
                v-model="contactLocal.favorite"
            />
            <label for="favorite" class="form-check-label">
                <strong>Liên hệ yêu thích</strong>
            </label>
        </div>

        <div style="margin-left: 20%;">
            <button class="btn btn-primary " style="width:100% ;text-align: center;">
                Lưu
            </button>
            &nbsp;
            <button
                v-if="contactLocal._id"
                type="button"
                class="btn btn-danger "
                @click="deleteContact"
                style="width:100% ;text-align: center;height: 40px;"
            >
                Xóa
            </button>
        </div>
    </Form>
</template>

<script>
    import * as yup from "yup";
    import { Form, Field, ErrorMessage } from "vee-validate";
   
    export default {
        components: {
            Form,
            Field,
            ErrorMessage,
        },
        emits: ["submit:contact", "delete:contact"],
        props: {
            contact: { type: Object, required: true }
        },
        data() {
            const contactFormSchema = yup.object().shape({
                name: yup
                    .string()
                    .required("Tên phải có giá trị.")
                    .min(2, "Tên phải ít nhất 2 ký tự.")
                    .max(50, "Tên có nhiều nhất 50 ký tự."),
                hinh: yup
                    .string()
                    .max(500, "Hinh tối đa 500 ký tự."),
                mota: yup.string().max(500, "Địa chỉ tối đa 500 ký tự."),
                gia: yup
                    .string()
                
            });
            return {
                // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
                // contactLocal để liên kết với các input trên form
                contactLocal: this.contact,
                contactFormSchema,
            };
        },
        methods: {
            submitContact() {
                this.$emit("submit:contact", this.contactLocal);
            },
            deleteContact() {
                this.$emit("delete:contact", this.contactLocal.id);
            },
        },
    };
</script>

<style scoped>
@import "@/assets/form.css";
    .error-feedback {
        color: red;
    }
    .div-cha {
        display: flex;
        justify-content: center;
    }
</style> 