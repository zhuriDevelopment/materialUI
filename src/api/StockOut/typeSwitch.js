class TypeSwitch {
	stockOutTypeSwitch = function (data, direction) {
		if (direction === 0) {
			//* str => int
			let result = 0;
			switch (data) {
				case '销售出库':
					result = 1;
					break;
				case '生产出库':
					result = 2;
					break;
				case '调拨出库':
					result = 3;
					break;
				default:
					result = 4;
					break;
			}
			return result;
		} else {
			//* int => str
			let result = 0;
			switch (data) {
			  case 1:
			    result = '销售出库';
			    break;
			  case 2:
			    result = '生产出库';
			    break;
			  case 3:
			    result = '调拨出库';
			    break;
			  default:
			    result = '其他出库';
			    break;
			}
			return result;
		}
	};

	relatedVouchSwitch = function (data, direction) {
		if (direction === 0) {
			//* str => int
			let result = 0;
			switch (data) {
			  case '销售类单据':
			    result = 1;
			    break;
			  case '生产类单据':
			    result = 2;
			    break;
			  case '调拨类单据':
			    result = 3;
			    break;
			  default:
			    result = 4;
			    break;
			}
			return result;
		} else {
			//* int => str
			let result = 0;
			switch (data) {
			  case 1:
			    result = '销售类单据';
			    break;
			  case 2:
			    result = '生产类单据';
			    break;
			  case 3:
			    result = '调拨类单据';
			    break;
			  default:
			    result = '其他类单据';
			    break;
			}
			return result;
		}
	};
}

export default new TypeSwitch();