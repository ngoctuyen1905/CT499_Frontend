<template>
  <br />
  <div class="container row">
    <div class="col-lg-8 offset-lg-2">
      <InputSearch v-model="searchText" /><br />
    </div>
    <div class="container ">
      <div class="col-md-12">
        <h4  style="text-align: center;">
          Danh sách Sản phẩm Book
        </h4>
        <hr />
        <div>
          <ContactList v-if="filteredContactsCount > 0" 
            :contacts="filteredContacts" 
            v-model:activeIndex="activeIndex"
           />
          <p v-else>Không có liên hệ nào.</p>
        </div>
        <div class="mt-3 row justify-content-around align-items-center">
          <button class="btn btn-sm btn-primary col-lg-3" @click="refreshList()" style="font-family: 'Times New Roman', Times, serif; color:white;">
            <i class="fas fa-redo"></i> Làm mới
          </button>
          <button class="btn btn-sm btn-success col-lg-3" @click="goToAddContact">
            <i class="fas fa-plus"></i> Thêm sản phẩm
          </button>
          <button class="btn btn-sm btn-danger col-lg-3" @click="removeAllContacts">
            <i class="fas fa-trash"></i> Xóa tất cả
          </button>
        </div>
      </div>
    </div>
    
    <div class="mt-3 col-md-12"> 
      <div v-if="activeContact">
        <div class="modal " id="myModal">
          <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
        
              <!-- Modal Header -->
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Chi tiết SẢN PHẨM</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
        
              <!-- Modal body -->
              <div class="modal-body">
                <ContactCard :contact="activeContact" />
              </div>
        
              <!-- Modal footer -->
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
        
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactCard from "@/components/ContactCard.vue";
import InputSearch from "@/components/InputSearch.vue";
import ContactList from "@/components/ContactList.vue";
import ContactService from "@/services/contact.service";

export default {
  components: {
    ContactCard,
    InputSearch,
    ContactList,
  },
  data() {
    return {
      contacts: [],
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
    contactStrings() {
      return this.contacts.map((contact) => {
        const { name, hinh, mota, gia } = contact;
        return [name, hinh, mota, gia].join("");
      });
    },
    // Trả về các contact có chứa thông tin cần tìm kiếm.
    filteredContacts() {
      if (!this.searchText) return this.contacts;
      return this.contacts.filter((_contact, index) =>
        this.contactStrings[index].includes(this.searchText)
      );
    },
    activeContact() {
      if (this.activeIndex < 0) return null;
      return this.filteredContacts[this.activeIndex];
    },
    filteredContactsCount() {
      return this.filteredContacts.length;
    },
  },
  methods: {
    async retrieveContacts() {
      try {
        this.contacts = await ContactService.getAll();
      } catch (error) {
        console.log(error);
      }
    },
    refreshList() {
      this.retrieveContacts();
      this.activeIndex = -1;
    },
    async removeAllContacts() {
      if (confirm("Bạn muốn xóa tất cả các sản phẩm?")) {
        try {
          await ContactService.deleteAll();
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