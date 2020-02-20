<template>
  <div class="hoteltype">
    <!-- 价格、类型 -->
    <div class="type">
      <el-row>
        <el-col :span="5" class="price">
          <el-row>价格</el-row>
          <el-row type="flex" justify="space-between">
            <el-col>0</el-col>4000
          </el-row>
          <el-row>
            <!-- 没有v-model -->
            <el-slider input-size="mini"></el-slider>
          </el-row>
        </el-col>
        <!-- level -->
        <el-col :span="5" class="level">
          <el-row type="flex" justify="center">住宿登记</el-row>
          <el-row style="margin-top:5px;">
            <el-dropdown style="width:100%;">
              <span class="el-dropdown-link" style="display:block;width:100%;">
                <el-row type="flex" justify="space-between">
                  不限<i class="el-icon-arrow-down el-icon--right"></i>
                </el-row>
              </span>
              <el-dropdown-menu slot="dropdown"
                ><!--下拉 -->
                <el-dropdown-item
                  ><el-checkbox style="width:150px"
                    >黄金糕</el-checkbox
                  ></el-dropdown-item
                >
                <el-dropdown-item
                  ><el-checkbox style="width:150px"
                    >狮子头</el-checkbox
                  ></el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </el-row>
        </el-col>
        <el-col :span="5" class="leixing">
          <el-row type="flex" justify="center">住宿类型</el-row>
          <el-row style="margin-top:5px;">
            <el-dropdown style="width:100%;">
              <span class="el-dropdown-link" style="display:block;width:100%;">
                <el-row type="flex" justify="space-between">
                  不限<i class="el-icon-arrow-down el-icon--right"></i>
                </el-row>
              </span>
              <el-dropdown-menu slot="dropdown"
                ><!--下拉 -->
                <el-dropdown-item
                  ><el-checkbox style="width:150px"
                    >黄金糕</el-checkbox
                  ></el-dropdown-item
                >
                <el-dropdown-item
                  ><el-checkbox style="width:150px"
                    >狮子头</el-checkbox
                  ></el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </el-row>
        </el-col>
        <el-col :span="5" class="sheshi">
          <el-row type="flex" justify="center">酒店设施</el-row>
          <el-row style="margin-top:5px;">
            <el-dropdown style="width:100%;">
              <span class="el-dropdown-link" style="display:block;width:100%;">
                <el-row type="flex" justify="space-between">
                  不限<i class="el-icon-arrow-down el-icon--right"></i>
                </el-row>
              </span>
              <el-dropdown-menu slot="dropdown"
                ><!--下拉 -->
                <el-dropdown-item
                  ><el-checkbox style="width:150px"
                    >黄金糕</el-checkbox
                  ></el-dropdown-item
                >
                <el-dropdown-item
                  ><el-checkbox style="width:150px"
                    >狮子头</el-checkbox
                  ></el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </el-row>
        </el-col>
        <el-col :span="4" class="pinpai">
          <el-row type="flex" justify="center">酒店品牌</el-row>
          <el-row style="margin-top:5px;">
            <el-dropdown style="width:100%;">
              <span class="el-dropdown-link" style="display:block;width:100%;">
                <el-row type="flex" justify="space-between">
                  不限<i class="el-icon-arrow-down el-icon--right"></i>
                </el-row>
              </span>
              <el-dropdown-menu
                slot="dropdown"
                style="overflow:auto;height:200px"
                ><!--下拉 -->
                <el-dropdown-item
                  ><el-checkbox style="width:110px"
                    >黄金糕</el-checkbox
                  ></el-dropdown-item
                >
                <el-dropdown-item
                  ><el-checkbox style="width:110px"
                    >狮子头</el-checkbox
                  ></el-dropdown-item
                >
                <el-dropdown-item
                  ><el-checkbox style="width:110px"
                    >狮子头</el-checkbox
                  ></el-dropdown-item
                >
                <el-dropdown-item
                  ><el-checkbox style="width:110px"
                    >狮子头</el-checkbox
                  ></el-dropdown-item
                >
                <el-dropdown-item
                  ><el-checkbox style="width:110px"
                    >狮子头</el-checkbox
                  ></el-dropdown-item
                >
                <el-dropdown-item
                  ><el-checkbox style="width:110px"
                    >狮子头</el-checkbox
                  ></el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.type {
  width: 100%;
  height: 80px;
  padding: 4px 0;
  box-sizing: border-box;
  margin: 25px 0;
  border: 1px solid #ccc;
  > .el-row {
    height: 100%;
    .price {
      padding: 0 15px;
      box-sizing: border-box;
    }
    .level,
    .leixing,
    .sheshi,
    .pinpai {
      padding: 5px 15px;
      box-sizing: border-box;
      border-left: 1px solid #ccc;
      height: 100%;
    }
  }
}
</style>
