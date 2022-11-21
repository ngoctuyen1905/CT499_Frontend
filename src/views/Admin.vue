<template>
    <div class="row container">
        <div class="row container" >
            <div class="col-md-12">
                <h4 style="text-align: center;">
                    Thông tin cá nhân
                </h4>
                <hr/>
                <div >
                    <AdminList v-if="filteredAdminsCount >=3" 
                        :admins="filteredAdmins" 
                        v-model:activeIndex="activeIndex"
                        class="hidden"
                        />
                    
                    <p v-else>Không có liên hệ nào.</p>
                </div>
                
            
                <div >
                    <div class="row" >
                        <div v-if="activeAdmin">
                            <AdminCard :admin="activeAdmin"  />
                            <router-link :to="{
                                name: 'admin.edit',
                                params: { id: activeAdmin._id },
                            }"
                            >
                                <span class="btn btn-sm btn-danger col-lg-4 offset-lg-4 ">
                                    <i class="fas fa-edit"></i> Hiệu chỉnh</span>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
    </div><br/>
</template>

<script>
    import AdminCard from "@/components/AdminCard.vue";
    import InputSearch from "@/components/InputSearch.vue";
    import AdminList from "@/components/AdminList.vue";
    import AdminService from "@/services/admin.service";

    export default {
        components: {
            AdminCard,
            InputSearch,
            AdminList,
        },
        data() {
            return {
                admins: [],
                activeIndex: -1,
                searchText: "",
            };
        },
        watch: {
            // Giám sát các thay đổi của biến searchText.
            // Bỏ chọn phần tử đang được chọn trong danh sách.
            searchText() {
                this.activeIndex = -1;
            },
        },
        computed: {
        // Chuyển các đối tượng contact thành chuỗi để tiện cho tìm kiếm.
            adminStrings() {
                return this.admins.map((admin) => {
                    const { name, adress, email, phone } = admin;
                    return [name, adress, email, phone].join("");
                });
            },
            // Trả về các admins có chứa thông tin cần tìm kiếm.
            filteredAdmins() {
                if (!this.searchText) return this.admins;
                return this.admins.filter((_admin, index) =>
                this.adminStrings[index].includes(this.searchText)
                );
            },
            activeAdmin() {
                if (this.activeIndex < 0) return null;
                return this.filteredAdmins[this.activeIndex];
            },
            filteredAdminsCount() {
                return this.filteredAdmins.length;
            },
        },
        methods: {
            async retrieveAdmins() {
                try {
                    this.admins = await AdminService.getAll();
                } catch (error) {
                    console.log(error);
                }
            },
            refreshList() {
                this.retrieveAdmins();
                this.activeIndex = 3;
            },
            async removeAllAdmins() {
                if (confirm("Bạn muốn xóa tất cả Liên hệ?")) {
                    try {
                        await AdminService.deleteAll();
                        this.refreshList();
                    } catch (error) {
                        console.log(error);
                    }
                }
            },
            
            goToAddContact() {
                this.$router.push({ name: "contact.add" });
            },
        },
        mounted() {
            this.refreshList();
        },
    }; 
</script>

<style scoped>
    .page {
            text-align: left;
            max-width: 750px;
        }
    .hidden {
         display: none;
    }
</style>