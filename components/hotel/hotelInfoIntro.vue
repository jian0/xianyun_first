  <template>
  <div>
    <div v-for="(item,index) in hotelInfoData" :key="index">
      <el-table :data="item.products" style="width: 100%;cursor: pointer;">
        <el-table-column prop="name" label="价格来源" width="420"></el-table-column>
        <el-table-column prop="bestType" label="低价房型" width="420"></el-table-column>
        <el-table-column prop="price" label="最低价格/每晚" >
        <template scope="scope">
          <div class="cell">
            <span>￥{{scope.row.price}}</span>
            起
            <span>
              <i class="el-icon-arrow-right"></i>
            </span>
          </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  props: ["hotelInfoData"],
  data() {
    return {
    };
  },
  methods: {
    formatter(row, column) {
      return row.price;
      console.log(row.price)
    }
  }
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