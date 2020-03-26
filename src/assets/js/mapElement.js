/* eslint-disable */
export var MapElement=[
    {value: "mapBase", label: '地图背景', children: [
        {value: "land", label: '陆地'},
        {value: "river", label: '水系'},
        {value: "greenbelt", label: '绿地'},
        {value: "artificialArea", label: '人造区域', children: [
            {value: "metroFacilities ", label: '地铁设施'},
            {value: "educationArea", label: '教育区域'},
            {value: "medicalArea", label: '医疗区域'},                                   
            {value: "scenicSpotArea", label: '景点区域'}
        ]},
        {value: "buildings", label: '建筑物'}
    ]},
    {value: "road", label: '道路', children: [
        {value: "highway", label: '高速及国道'},
        {value: "cityRoad", label: '城市主路'},
        {value: "ordinaryRoad", label: '普通道路'},
        {value: "railway", label: '铁路'},
        {value: "subway", label: '地铁'}
    ]},
    {value: "POI", label: '兴趣点', children: [
        {value: "airport", label: '机场'},
        {value: "tourist", label: '旅游景点'},
        {value: "education", label: '教育'},
        {value: "medical", label: '医疗'}
    ]},
    {value: "division", label: '行政区划', children: [        
        {value: "annotation", label: '行政标注', children: [
            {value: "continent", label: '大洲'},
            {value: "state", label: '国家'},
            {value: "city", label: '城市'},                                   
            {value: "district", label: '区县'},                                   
            {value: "town", label: '乡镇'}
        ]},
        {value: "boundary", label: '边界线'}
    ]}
]