<template>
  <!-- 添加评论模块 -->
  <div class="comments cmt">
    <h4 class="cmt-title">评论</h4>
    <!-- tag标签 -->
    <el-tag
      :key="tag"
      v-for="tag in dynamicTags"
      closable
      :disable-transitions="false"
      @close="handleClose(tag)"
      style="color:#909399"
    >回复 {{tag}}</el-tag>
    <!-- 输入框 -->
    <el-input type="textarea" :rows="2" placeholder="说点什么吧..." v-model="textarea"></el-input>
    <el-row type="flex" justify="space-between">
      <!-- 上传图片 -->
      <el-upload action="#" list-type="picture-card" :auto-upload="false">
        <i slot="default" class="el-icon-plus"></i>
        <div slot="file" slot-scope="{file}">
          <img class="el-upload-list__item-thumbnail" :src="file.url" alt />
          <span class="el-upload-list__item-actions">
            <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
              <i class="el-icon-zoom-in"></i>
            </span>
            <span
              v-if="!disabled"
              class="el-upload-list__item-delete"
              @click="handleDownload(file)"
            >
              <i class="el-icon-download"></i>
            </span>
            <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
              <i class="el-icon-delete"></i>
            </span>
          </span>
        </div>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt />
      </el-dialog>
      <!-- 提交按钮 -->
      <el-button type="primary">提交</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 输入框内容
      textarea: "",
      dialogVisible: false,
      dialogImageUrl: "",
      dynamicTags: ["@地球发动机"],
      commentsData: []
    };
  },
  methods: {
    // 关闭tag标签
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
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