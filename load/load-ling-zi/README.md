# load-ling-zi

> A loading component

## Installation

``` bash
# install dependencies
npm install load-ling-zi -D
```

## Usage
```
<loading v-if="loading.isShow">
    <span>{{ loading.text }}</span>
</loading>

<script>
    import loading from 'load-ling-zi'
    export default {
        components: {
            loading:loading
        },
        data () {
            return {
                loading:{
                    isShow:true,
                    text:"加载中"
                },   
            }
        }
    }
</script>
```


