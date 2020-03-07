<template>
  <div id="Tree">
    <div
      class="one-tree"
      v-for="msg in TreeList"
      :key="msg.id"
      @click.stop="showTree(msg.id)"
    >
      <div :id="msg.id">
        <img src="../assets/1.png" />
        <span>{{ msg.title }}</span>
        <div v-if="msg.next && msg.show">
          <div
            class="two-tree"
            v-for="msg in msg.next"
            :key="msg.id"
            @click.stop="showTree(msg.id)"
          >
            <div :id="msg.id">
              <img v-if="msg.next" src="../assets/1.png" />
              <img v-else src="../assets/2.png" />

              <span>{{ msg.title }}</span>
              <div v-if="msg.next && msg.show">
                <div
                  class="three-tree"
                  v-for="msg in msg.next"
                  :key="msg.id"
                  @click.stop="showTree(msg.id)"
                >
                  <div :id="msg.id">
                    <img v-if="msg.next == 0" src="../assets/1.png" />
                    <img v-else src="../assets/2.png" />
                    <span>{{ msg.title }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      TreeList: []
    };
  },
  created() {
    this.getTreeList();
  },
  methods: {
    async getTreeList() {
      let { data } = await this.$http.get("/list");
      this.TreeList = data;
    },
    showTree(id) {
      this.eachList(this.TreeList, id);
    },
    eachList(Arr, id) {
      console.log(Arr, id);
      Arr.forEach(item => {
        if (item.id == id) {
          item.show = !item.show;
        } else if (item.next) {
          this.eachList(item.next, id);
        }
      });
    }
  }
};
</script>

<style>
#Tree {
  width: 300px;
  margin: 30px auto;
  position: relative;
}
.one-tree {
  font-weight: 700;
  color: red;
}
.two-tree {
  margin-left: 30px;
  font-weight: 500;
  color: blue;
}
.three-tree {
  margin-left: 30px;
  font-weight: 400;
  color: green;
}
img{
  width: 12px;
  height: 20px;
  float: left;
  margin-right: 10px;
}
</style>
