<template>
    <Form 
    @submit="submitAdmin" 
    :validation-schema="adminFormSchema"
    style="margin-left: -22%;"
    >
        <div class="form-group">
            <label for="name">Tên</label>
            <Field name="name" 
            type="text" 
            class="form-control" 
            v-model="adminLocal.name" 
            style="width: 600px;"
            />
            <ErrorMessage name="name" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="email">E-mail</label>
            <Field name="email" 
            type="email" 
            class="form-control" 
            v-model="adminLocal.email" 
            style="width: 600px;"
            />
            <ErrorMessage name="email" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="address">Địa chỉ</label>
            <Field name="address" 
            type="text" 
            class="form-control" 
            v-model="adminLocal.address" 
            style="width: 600px;"
            />
            <ErrorMessage name="address" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="phone">Điện thoại</label>
            <Field name="phone" 
            type="tel" 
            class="form-control" 
            v-model="adminLocal.phone" 
            style="width: 600px;"
            />
            <ErrorMessage name="phone" class="error-feedback" />
        </div>
        <!-- <div class="form-group form-check">
            <input name="favorite" 
            type="checkbox" 
            class="form-check-input" 
            v-model="adminLocal.favorite" />
            <label for="favorite" class="form-check-label">
                <strong>Liên hệ yêu thích</strong>
            </label>
        </div> -->

        <div class="row">
            <div class="form-group row div-cha">
                <button class="btn btn-primary col-lg-11  offset-lg-2">Lưu</button>
            </div>
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
    emits: ["submit:admin", "delete:admin"],
    props: {
        admin: { type: Object, required: true }
    },
    data() {
        const adminFormSchema = yup.object().shape({
            name: yup
                .string()
                .required("Tên phải có giá trị.")
                .min(2, "Tên phải ít nhất 2 ký tự.")
                .max(50, "Tên có nhiều nhất 50 ký tự."),
            email: yup
                .string()
                .email("E-mail không đúng.")
                .max(50, "E-mail tối đa 50 ký tự."),
            address: yup.string().max(100, "Địa chỉ tối đa 100 ký tự."),
            phone: yup
                .string()
                // .matches(
                //     /((09|03|07|08|05)+([0-9]{8})\b)/g,
                //     "Số điện thoại không hợp lệ."
                // ),
        });
        return {
            // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
            // adminLocal để liên kết với các input trên form
            adminLocal: this.admin,
            adminFormSchema,
        };
    },
    methods: {
        submitAdmin() {
            this.$emit("submit:admin", this.adminLocal);
        },
        deleteAdmin() {
            this.$emit("delete:admin", this.adminLocal.id);
        },
    },
};
</script>

<style scoped>
@import "@/assets/form.css";

.error-feedback {
    color: red;
}
</style> 