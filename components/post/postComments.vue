<template>
  <!-- 添加评论模块 -->
  <div class="comments cmt">
    <h4 class="cmt-title">评论</h4>
    <!-- tag标签 -->
    <el-tag
      v-show="isShow"
      closable
      :disable-transitions="false"
      @close="handleClose()"
      style="color:#909399"
    >回复 {{userName}} {{followInfo}}</el-tag>
    <!-- 输入框 -->
    <el-input type="textarea" :rows="2" placeholder="说点什么吧..." v-model="textarea"></el-input>
    <el-row type="flex" justify="space-between">
      <!-- 上传图片 -->
      <el-upload
        name="files"
        ref="uploadImg"
        action="http://157.122.54.189:9095/upload"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
        :on-success="onSuccess"
        :on-error="onError"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible" size="tiny">
        <img width="100%" :src="dialogImageUrl" alt />
      </el-dialog>
      <!-- 提交按钮 -->
      <el-button type="primary" @click="push">提交</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      disabled: false, // 是否显示下载/删除按钮
      isShow: false,
      userName: "", // 将要回复的用户
      textarea: "", // 输入框内容
      dialogVisible: false,
      dialogImageUrl: "",
      imgs: [], // 需要上传的图片
      pId: "" //要回复的ID
    };
  },
  methods: {
    // 移除图片
    handleRemove(file, fileList) {
      this.imgs = this.imgs.filter(e => {
        // console.log(file);
        e.name !== file.name;
      });
    },
    // 放大图片
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    // 上传成功
    onSuccess(res, file, fileList) {
      // console.log(res);
      res.forEach(e => {
        e.url = this.$axios.defaults.baseURL + e.url;
      });
      // 提示
      this.$message.success("图片上传成功");
      this.imgs.push(res[0]);
    },
    // 上传失败
    onError(err, file, fileList) {
      this.$message.error("图片上传失败");
    },

    // 封装发表评论函数
    comment() {
      let id = this.$route.query.id;
      if (!this.textarea) {
        this.$message.warning("请输入评论内容！");
        return;
      }

      this.$axios({
        url: "/comments",
        method: "POST",
        headers: {
          Authorization: `Bearer ` + this.$store.state.user.userInfo.token
        },
        data: {
          content: this.textarea,
          pics: this.imgs,
          post: id,
          follow: this.pId
        }
      }).then(res => {
        console.log(res);
        if (res.data.message == "提交成功") {
          this.$message.success("发表评论成功");
          this.$refs.uploadImg.clearFiles();
          this.$emit("pullSuccess");
          (this.textarea = ""), (this.imgs = []);
        }
      });
    },
    // 关闭tag标签
    handleClose() {
      this.isShow = false;
      this.pId = "";
      this.userName = "";
      this.$store.commit("post/followInfo", {});
    },
    // 提交评论
    push() {
      this.comment();
      this.handleClose();
    }
  },
  computed: {
    followInfo() {
      let data = this.$store.state.post.followInfo;
      if (!data.id) return;
      // 显示标签
      this.isShow = true;
      // 修改数据
      this.pId = data.id;
      // 修改回复的用户
      this.userName = data.account.nickname;
      return "";
    }
  }
};
</script>

<style scoped lang='less'>
.cmt {
  .cmt-title {
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 20px;
  }
}
.el-textarea {
  margin-bottom: 10px;
}
/deep/.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  margin-bottom: 30px;
  .avatar-uploader-icon {
    width: 100px;
    height: 100px;
    line-height: 100px;
  }
}
.el-button {
  height: 40px;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
/deep/.el-upload {
  border: 1px dashed #c0ccda;
  border-radius: 6px;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

//   tag标签
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>