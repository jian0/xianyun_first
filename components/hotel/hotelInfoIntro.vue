  <template>
  <el-table :data="tableData" style="width: 100%;cursor: pointer;">
    <el-table-column prop="priceSource" label="价格来源" width="420"></el-table-column>
    <el-table-column prop="lowPrice" label="低价房型" width="420"></el-table-column>
    <el-table-column prop="onePrice" label="最低价格/每晚">
      <div class="cell">
        <span>￥268</span>
        起
        <span>
          <i class="el-icon-arrow-right"></i>
        </span>
      </div>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          priceSource: "携程",
          lowPrice: "高级大床房A",
          onePrice: 197
        },
        {
          priceSource: "艺龙",
          lowPrice: "高级大床房A",
          onePrice: 266
        }
      ]
    };
  },
};
</script>

<style scoped lang="less">
.cell {
  line-height: 23px;
  font-weight: 400;
  span {
    color: #f90;
    line-height: 23px;
  }
}
</style>