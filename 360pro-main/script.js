(function(){
    var script = {
 "mouseWheelEnabled": true,
 "start": "this.init(); this.syncPlaylists([this.ThumbnailList_810D9187_8C85_714D_41D6_2417D45498CA_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_9CF134F3_8C8E_D0C5_41D3_E061CF90CE8B].forEach(function(component) { component.set('visible', false); }) }",
 "data": {
  "name": "Player450"
 },
 "children": [
  "this.MainViewer",
  "this.ThumbnailList_810D9187_8C85_714D_41D6_2417D45498CA",
  "this.IconButton_9C8DC507_8C8D_714D_41C2_217F15910A87",
  "this.IconButton_9CF134F3_8C8E_D0C5_41D3_E061CF90CE8B",
  "this.IconButton_9C1F5591_8C8F_5145_41DF_D7EBCDA13856",
  "this.IconButton_9C298DD2_8C8E_B0C7_41BF_BB77624B120C"
 ],
 "id": "rootPlayer",
 "scrollBarMargin": 2,
 "vrPolyfillScale": 0.5,
 "layout": "absolute",
 "borderRadius": 0,
 "minHeight": 20,
 "definitions": [{
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "mouseControlMode": "drag_acceleration",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer"
},
{
 "automaticRotationSpeed": 140,
 "manualRotationSpeed": 1000,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_998F739A_8C87_D147_41C6_C38AC1708BAB",
 "id": "camera_998F639A_8C87_D147_41D3_4EFD5CB2D5A7",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 120,
  "yaw": 12.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_804C6FC2_8AEA_9121_41E0_8848C6DAFB91_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_804C6FC2_8AEA_9121_41E0_8848C6DAFB91_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_804C6FC2_8AEA_9121_41E0_8848C6DAFB91_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_804C6FC2_8AEA_9121_41E0_8848C6DAFB91_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_804C6FC2_8AEA_9121_41E0_8848C6DAFB91_t.jpg",
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_804C6FC2_8AEA_9121_41E0_8848C6DAFB91_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_804C6FC2_8AEA_9121_41E0_8848C6DAFB91_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_804C6FC2_8AEA_9121_41E0_8848C6DAFB91_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_804C6FC2_8AEA_9121_41E0_8848C6DAFB91_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_804C6FC2_8AEA_9121_41E0_8848C6DAFB91_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_804C6FC2_8AEA_9121_41E0_8848C6DAFB91_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_804C6FC2_8AEA_9121_41E0_8848C6DAFB91_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_804C6FC2_8AEA_9121_41E0_8848C6DAFB91_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_804C6FC2_8AEA_9121_41E0_8848C6DAFB91_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_804C6FC2_8AEA_9121_41E0_8848C6DAFB91_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_804C6FC2_8AEA_9121_41E0_8848C6DAFB91_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_804C6FC2_8AEA_9121_41E0_8848C6DAFB91_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_804C6FC2_8AEA_9121_41E0_8848C6DAFB91_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_804C6FC2_8AEA_9121_41E0_8848C6DAFB91_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_804C6FC2_8AEA_9121_41E0_8848C6DAFB91_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_804C6FC2_8AEA_9121_41E0_8848C6DAFB91_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_804C6FC2_8AEA_9121_41E0_8848C6DAFB91_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_804C6FC2_8AEA_9121_41E0_8848C6DAFB91_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_804C6FC2_8AEA_9121_41E0_8848C6DAFB91_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_804C6FC2_8AEA_9121_41E0_8848C6DAFB91_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ]
   }
  }
 ],
 "label": "PASSAGE",
 "id": "panorama_804C6FC2_8AEA_9121_41E0_8848C6DAFB91",
 "partial": false,
 "pitch": 0,
 "vfov": 180,
 "hfovMax": 130,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_804C6FC2_8AEA_9121_41E0_8848C6DAFB91_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -167.18,
   "yaw": -0.6,
   "panorama": "this.panorama_8A719EAE_81CD_53AD_41D6_E8A3DE2C7144",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "overlays": [
  "this.overlay_9C475F83_8C82_D144_41DC_0C1374801F59",
  "this.panorama_804C6FC2_8AEA_9121_41E0_8848C6DAFB91_tcap0"
 ],
 "hfovMin": "120%"
},
{
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A719EAE_81CD_53AD_41D6_E8A3DE2C7144_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8A719EAE_81CD_53AD_41D6_E8A3DE2C7144_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8A719EAE_81CD_53AD_41D6_E8A3DE2C7144_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8A719EAE_81CD_53AD_41D6_E8A3DE2C7144_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8A719EAE_81CD_53AD_41D6_E8A3DE2C7144_t.jpg",
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A719EAE_81CD_53AD_41D6_E8A3DE2C7144_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8A719EAE_81CD_53AD_41D6_E8A3DE2C7144_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8A719EAE_81CD_53AD_41D6_E8A3DE2C7144_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8A719EAE_81CD_53AD_41D6_E8A3DE2C7144_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A719EAE_81CD_53AD_41D6_E8A3DE2C7144_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8A719EAE_81CD_53AD_41D6_E8A3DE2C7144_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8A719EAE_81CD_53AD_41D6_E8A3DE2C7144_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8A719EAE_81CD_53AD_41D6_E8A3DE2C7144_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A719EAE_81CD_53AD_41D6_E8A3DE2C7144_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8A719EAE_81CD_53AD_41D6_E8A3DE2C7144_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8A719EAE_81CD_53AD_41D6_E8A3DE2C7144_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8A719EAE_81CD_53AD_41D6_E8A3DE2C7144_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A719EAE_81CD_53AD_41D6_E8A3DE2C7144_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8A719EAE_81CD_53AD_41D6_E8A3DE2C7144_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8A719EAE_81CD_53AD_41D6_E8A3DE2C7144_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8A719EAE_81CD_53AD_41D6_E8A3DE2C7144_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A719EAE_81CD_53AD_41D6_E8A3DE2C7144_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8A719EAE_81CD_53AD_41D6_E8A3DE2C7144_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8A719EAE_81CD_53AD_41D6_E8A3DE2C7144_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8A719EAE_81CD_53AD_41D6_E8A3DE2C7144_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ]
   }
  }
 ],
 "label": "entrance",
 "id": "panorama_8A719EAE_81CD_53AD_41D6_E8A3DE2C7144",
 "partial": false,
 "pitch": 0,
 "vfov": 180,
 "hfovMax": 130,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_8A719EAE_81CD_53AD_41D6_E8A3DE2C7144_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -0.6,
   "yaw": -167.18,
   "panorama": "this.panorama_804C6FC2_8AEA_9121_41E0_8848C6DAFB91",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_94708C14_81CB_B67C_41A6_AF697D39AA3F"
  },
  {
   "backwardYaw": -170.41,
   "yaw": 1.98,
   "panorama": "this.panorama_805C6728_8AEA_9160_41D4_C31A702CC185",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "overlays": [
  "this.overlay_91273F1A_81C5_5275_41B8_AB896472FE7C",
  "this.overlay_9D1E0328_8C86_B143_41B9_8A03DAF55DFA",
  "this.overlay_9FA49B6A_8C86_D1C7_41D5_8367EA751B9B",
  "this.panorama_8A719EAE_81CD_53AD_41D6_E8A3DE2C7144_tcap0"
 ],
 "hfovMin": "120%"
},
{
 "easing": "linear",
 "id": "effect_9EAB6E23_8C83_7344_41D3_24CBE1002473",
 "class": "FadeOutEffect",
 "duration": 400
},
{
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_805C6728_8AEA_9160_41D4_C31A702CC185_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_805C6728_8AEA_9160_41D4_C31A702CC185_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_805C6728_8AEA_9160_41D4_C31A702CC185_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_805C6728_8AEA_9160_41D4_C31A702CC185_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_805C6728_8AEA_9160_41D4_C31A702CC185_t.jpg",
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_805C6728_8AEA_9160_41D4_C31A702CC185_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_805C6728_8AEA_9160_41D4_C31A702CC185_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_805C6728_8AEA_9160_41D4_C31A702CC185_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_805C6728_8AEA_9160_41D4_C31A702CC185_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_805C6728_8AEA_9160_41D4_C31A702CC185_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_805C6728_8AEA_9160_41D4_C31A702CC185_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_805C6728_8AEA_9160_41D4_C31A702CC185_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_805C6728_8AEA_9160_41D4_C31A702CC185_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_805C6728_8AEA_9160_41D4_C31A702CC185_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_805C6728_8AEA_9160_41D4_C31A702CC185_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_805C6728_8AEA_9160_41D4_C31A702CC185_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_805C6728_8AEA_9160_41D4_C31A702CC185_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_805C6728_8AEA_9160_41D4_C31A702CC185_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_805C6728_8AEA_9160_41D4_C31A702CC185_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_805C6728_8AEA_9160_41D4_C31A702CC185_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_805C6728_8AEA_9160_41D4_C31A702CC185_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_805C6728_8AEA_9160_41D4_C31A702CC185_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_805C6728_8AEA_9160_41D4_C31A702CC185_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_805C6728_8AEA_9160_41D4_C31A702CC185_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_805C6728_8AEA_9160_41D4_C31A702CC185_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ]
   }
  }
 ],
 "label": "passage2",
 "id": "panorama_805C6728_8AEA_9160_41D4_C31A702CC185",
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_805C6728_8AEA_9160_41D4_C31A702CC185_t.jpg",
 "hfovMax": 130,
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "backwardYaw": 1.98,
   "yaw": -170.41,
   "panorama": "this.panorama_8A719EAE_81CD_53AD_41D6_E8A3DE2C7144",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "overlays": [
  "this.overlay_9FDD165F_8C85_53FD_41C4_CF0811B3F665",
  "this.panorama_805C6728_8AEA_9160_41D4_C31A702CC185_tcap0"
 ],
 "hfovMin": "120%"
},
{
 "automaticRotationSpeed": 140,
 "manualRotationSpeed": 1000,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_96683DDB_8245_B1F4_419F_B6F16E6B38B4",
 "id": "panorama_8A719EAE_81CD_53AD_41D6_E8A3DE2C7144_camera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 120,
  "yaw": -0.27,
  "class": "PanoramaCameraPosition",
  "pitch": -1.37
 }
},
{
 "easing": "linear",
 "id": "effect_9E49E91D_8C9D_517C_41C6_46B6DC89859B",
 "class": "FadeOutEffect",
 "duration": 300
},
{
 "automaticRotationSpeed": 140,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323000
   },
   {
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_94708C14_81CB_B67C_41A6_AF697D39AA3F_camera",
 "automaticZoomSpeed": 48,
 "initialPosition": {
  "yaw": 17.67,
  "class": "PanoramaCameraPosition",
  "pitch": -3.88
 }
},
{
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_94708C14_81CB_B67C_41A6_AF697D39AA3F_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_94708C14_81CB_B67C_41A6_AF697D39AA3F_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_94708C14_81CB_B67C_41A6_AF697D39AA3F_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_94708C14_81CB_B67C_41A6_AF697D39AA3F_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_94708C14_81CB_B67C_41A6_AF697D39AA3F_t.jpg",
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_94708C14_81CB_B67C_41A6_AF697D39AA3F_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_94708C14_81CB_B67C_41A6_AF697D39AA3F_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_94708C14_81CB_B67C_41A6_AF697D39AA3F_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_94708C14_81CB_B67C_41A6_AF697D39AA3F_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_94708C14_81CB_B67C_41A6_AF697D39AA3F_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_94708C14_81CB_B67C_41A6_AF697D39AA3F_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_94708C14_81CB_B67C_41A6_AF697D39AA3F_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_94708C14_81CB_B67C_41A6_AF697D39AA3F_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_94708C14_81CB_B67C_41A6_AF697D39AA3F_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_94708C14_81CB_B67C_41A6_AF697D39AA3F_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_94708C14_81CB_B67C_41A6_AF697D39AA3F_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_94708C14_81CB_B67C_41A6_AF697D39AA3F_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_94708C14_81CB_B67C_41A6_AF697D39AA3F_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_94708C14_81CB_B67C_41A6_AF697D39AA3F_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_94708C14_81CB_B67C_41A6_AF697D39AA3F_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_94708C14_81CB_B67C_41A6_AF697D39AA3F_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_94708C14_81CB_B67C_41A6_AF697D39AA3F_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_94708C14_81CB_B67C_41A6_AF697D39AA3F_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_94708C14_81CB_B67C_41A6_AF697D39AA3F_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_94708C14_81CB_B67C_41A6_AF697D39AA3F_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ]
   }
  }
 ],
 "label": "Lab",
 "id": "panorama_94708C14_81CB_B67C_41A6_AF697D39AA3F",
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_94708C14_81CB_B67C_41A6_AF697D39AA3F_t.jpg",
 "hfovMax": 130,
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8A719EAE_81CD_53AD_41D6_E8A3DE2C7144"
  }
 ],
 "overlays": [
  "this.overlay_970D1878_8244_BEB4_41D2_B01D63E51120",
  "this.panorama_94708C14_81CB_B67C_41A6_AF697D39AA3F_tcap0"
 ],
 "hfovMin": "120%"
},
{
 "automaticRotationSpeed": 140,
 "manualRotationSpeed": 1000,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_998153AA_8C87_D147_41DE_CF26EA854411",
 "id": "camera_998143AA_8C87_D147_41DC_446D7794BA54",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 120,
  "yaw": -84.49,
  "class": "PanoramaCameraPosition",
  "pitch": -4.59
 }
},
{
 "automaticRotationSpeed": 140,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_99BBD3B9_8C87_D144_41DC_B8BFA9FEBE66",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 120,
  "yaw": 179.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticRotationSpeed": 140,
 "manualRotationSpeed": 1000,
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_99CC43D9_8C87_D0C5_418F_55A07B1D4917",
 "id": "camera_99CC63D9_8C87_D0C5_41C1_469FD5A05E0B",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 120,
  "yaw": -178.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticRotationSpeed": 140,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_804C6FC2_8AEA_9121_41E0_8848C6DAFB91_camera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 120,
  "yaw": -85.05,
  "class": "PanoramaCameraPosition",
  "pitch": -0.69
 }
},
{
 "easing": "linear",
 "id": "effect_9E48991D_8C9D_517C_41C1_159CE22DE958",
 "class": "FadeInEffect",
 "duration": 300
},
{
 "automaticRotationSpeed": 140,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323000
   },
   {
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_99AE23C9_8C87_D0C5_41E0_FE53BAB85D0E",
 "automaticZoomSpeed": 48,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 4.59
 }
},
{
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_810D9187_8C85_714D_41D6_2417D45498CA_playlist, 0, 1)",
   "media": "this.panorama_804C6FC2_8AEA_9121_41E0_8848C6DAFB91",
   "camera": "this.panorama_804C6FC2_8AEA_9121_41E0_8848C6DAFB91_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_810D9187_8C85_714D_41D6_2417D45498CA_playlist, 1, 2)",
   "media": "this.panorama_8A719EAE_81CD_53AD_41D6_E8A3DE2C7144",
   "camera": "this.panorama_8A719EAE_81CD_53AD_41D6_E8A3DE2C7144_camera"
  },
  {
   "start": "this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_810D9187_8C85_714D_41D6_2417D45498CA_playlist, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_810D9187_8C85_714D_41D6_2417D45498CA_playlist, 2, 3)",
   "media": "this.panorama_94708C14_81CB_B67C_41A6_AF697D39AA3F",
   "camera": "this.panorama_94708C14_81CB_B67C_41A6_AF697D39AA3F_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_810D9187_8C85_714D_41D6_2417D45498CA_playlist, 3, 0)",
   "media": "this.panorama_805C6728_8AEA_9160_41D4_C31A702CC185",
   "camera": "this.panorama_805C6728_8AEA_9160_41D4_C31A702CC185_camera"
  }
 ],
 "id": "ThumbnailList_810D9187_8C85_714D_41D6_2417D45498CA_playlist",
 "class": "PlayList"
},
{
 "easing": "linear",
 "id": "effect_9EAB7E23_8C83_7344_41DA_F97BAC2A9CCC",
 "class": "FadeInEffect",
 "duration": 400
},
{
 "automaticRotationSpeed": 140,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_805C6728_8AEA_9160_41D4_C31A702CC185_camera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -93.12,
  "class": "PanoramaCameraPosition",
  "pitch": 2.81
 }
},
{
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_804C6FC2_8AEA_9121_41E0_8848C6DAFB91",
   "camera": "this.panorama_804C6FC2_8AEA_9121_41E0_8848C6DAFB91_camera"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_8A719EAE_81CD_53AD_41D6_E8A3DE2C7144",
   "camera": "this.panorama_8A719EAE_81CD_53AD_41D6_E8A3DE2C7144_camera"
  },
  {
   "start": "this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_94708C14_81CB_B67C_41A6_AF697D39AA3F",
   "camera": "this.panorama_94708C14_81CB_B67C_41A6_AF697D39AA3F_camera"
  },
  {
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 0)",
   "media": "this.panorama_805C6728_8AEA_9160_41D4_C31A702CC185",
   "camera": "this.panorama_805C6728_8AEA_9160_41D4_C31A702CC185_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "automaticRotationSpeed": 140,
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "yawSpeed": 13.26,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_99DC13C9_8C87_D0C5_41BD_972EA4EF14A8",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 9.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "vrPointerSelectionTime": 2000,
 "playbackBarHeadShadow": true,
 "id": "MainViewer",
 "left": 0,
 "progressBackgroundOpacity": 1,
 "progressHeight": 10,
 "progressBottom": 0,
 "playbackBarOpacity": 1,
 "minHeight": 50,
 "width": "100%",
 "shadow": false,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBarOpacity": 1,
 "propagateClick": false,
 "toolTipShadowOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadShadowOpacity": 0.7,
 "displayTooltipInTouchScreens": true,
 "toolTipTextShadowOpacity": 0,
 "vrPointerColor": "#FFFFFF",
 "toolTipShadowHorizontalLength": 0,
 "progressBorderSize": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontColor": "#606060",
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "transitionDuration": 500,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "playbackBarHeadOpacity": 1,
 "class": "ViewerArea",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingRight": 6,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderSize": 1,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "playbackBarHeight": 10,
 "toolTipDisplayTime": 600,
 "playbackBarHeadWidth": 6,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "borderRadius": 0,
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "progressBarBorderSize": 0,
 "toolTipBorderRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipBorderColor": "#767676",
 "minWidth": 100,
 "toolTipShadowSpread": 0,
 "playbackBarBorderRadius": 0,
 "bottom": "0%",
 "top": 0,
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "toolTipTextShadowColor": "#000000",
 "borderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipShadowBlurRadius": 3,
 "playbackBarBorderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressRight": 0,
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "toolTipShadowColor": "#333333"
},
{
 "backgroundOpacity": 0,
 "itemVerticalAlign": "middle",
 "id": "ThumbnailList_810D9187_8C85_714D_41D6_2417D45498CA",
 "itemLabelFontWeight": "normal",
 "width": "37.597%",
 "itemThumbnailShadowBlurRadius": 8,
 "shadow": false,
 "right": "29.45%",
 "itemThumbnailBorderRadius": 5,
 "itemLabelFontSize": 14,
 "propagateClick": false,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "itemThumbnailScaleMode": "fit_outside",
 "scrollBarOpacity": 0.17,
 "itemLabelTextDecoration": "none",
 "height": 133,
 "itemLabelFontColor": "#FFFFFF",
 "scrollBarVisible": "rollOver",
 "paddingRight": 20,
 "gap": 13,
 "scrollBarColor": "#FFFFFF",
 "itemLabelGap": 8,
 "itemBackgroundOpacity": 0,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailHeight": 75,
 "itemHorizontalAlign": "center",
 "itemThumbnailShadowColor": "#000000",
 "horizontalAlign": "left",
 "itemPaddingBottom": 3,
 "itemMode": "normal",
 "itemLabelFontStyle": "normal",
 "paddingBottom": 10,
 "class": "ThumbnailList",
 "itemLabelHorizontalAlign": "center",
 "verticalAlign": "top",
 "itemLabelFontFamily": "Arial",
 "layout": "horizontal",
 "borderRadius": 5,
 "itemThumbnailOpacity": 1,
 "itemBorderRadius": 0,
 "playList": "this.ThumbnailList_810D9187_8C85_714D_41D6_2417D45498CA_playlist",
 "selectedItemLabelFontColor": "#FFCC00",
 "itemPaddingRight": 3,
 "minWidth": 20,
 "itemPaddingLeft": 3,
 "bottom": "0.69%",
 "paddingLeft": 20,
 "itemOpacity": 1,
 "itemThumbnailShadow": true,
 "itemThumbnailShadowSpread": 1,
 "itemThumbnailShadowOpacity": 0.27,
 "borderSize": 0,
 "itemThumbnailWidth": 75,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "selectedItemLabelFontWeight": "bold",
 "itemBackgroundColorRatios": [],
 "itemLabelPosition": "bottom",
 "itemThumbnailShadowVerticalLength": 3,
 "rollOverItemBackgroundOpacity": 0,
 "rollOverItemLabelFontWeight": "bold",
 "scrollBarMargin": 2,
 "data": {
  "name": "ThumbnailList35762"
 },
 "paddingTop": 10,
 "itemThumbnailShadowHorizontalLength": 3
},
{
 "id": "IconButton_9C8DC507_8C8D_714D_41C2_217F15910A87",
 "iconURL": "skin/IconButton_9C8DC507_8C8D_714D_41C2_217F15910A87.png",
 "width": 60,
 "borderRadius": 0,
 "shadow": false,
 "right": "0.45%",
 "propagateClick": false,
 "minHeight": 1,
 "minWidth": 1,
 "transparencyActive": true,
 "maxWidth": 60,
 "maxHeight": 60,
 "height": 60,
 "paddingLeft": 0,
 "mode": "push",
 "paddingRight": 0,
 "top": "0.28%",
 "borderSize": 0,
 "click": "if(!this.IconButton_9CF134F3_8C8E_D0C5_41D3_E061CF90CE8B.get('visible')){ this.setComponentVisibility(this.IconButton_9CF134F3_8C8E_D0C5_41D3_E061CF90CE8B, true, 0, this.effect_9EAB7E23_8C83_7344_41DA_F97BAC2A9CCC, 'showEffect', false) } else { this.setComponentVisibility(this.IconButton_9CF134F3_8C8E_D0C5_41D3_E061CF90CE8B, false, 0, this.effect_9EAB6E23_8C83_7344_41D3_24CBE1002473, 'hideEffect', false) }; if(!this.IconButton_9C1F5591_8C8F_5145_41DF_D7EBCDA13856.get('visible')){ this.setComponentVisibility(this.IconButton_9C1F5591_8C8F_5145_41DF_D7EBCDA13856, true, 0, this.effect_9EAB7E23_8C83_7344_41DA_F97BAC2A9CCC, 'showEffect', false) } else { this.setComponentVisibility(this.IconButton_9C1F5591_8C8F_5145_41DF_D7EBCDA13856, false, 0, this.effect_9EAB6E23_8C83_7344_41D3_24CBE1002473, 'hideEffect', false) }; if(!this.IconButton_9C298DD2_8C8E_B0C7_41BF_BB77624B120C.get('visible')){ this.setComponentVisibility(this.IconButton_9C298DD2_8C8E_B0C7_41BF_BB77624B120C, true, 0, this.effect_9EAB7E23_8C83_7344_41DA_F97BAC2A9CCC, 'showEffect', false) } else { this.setComponentVisibility(this.IconButton_9C298DD2_8C8E_B0C7_41BF_BB77624B120C, false, 0, this.effect_9EAB6E23_8C83_7344_41D3_24CBE1002473, 'hideEffect', false) }",
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton6435"
 },
 "class": "IconButton",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0,
 "verticalAlign": "middle"
},
{
 "id": "IconButton_9CF134F3_8C8E_D0C5_41D3_E061CF90CE8B",
 "iconURL": "skin/IconButton_9CF134F3_8C8E_D0C5_41D3_E061CF90CE8B.png",
 "width": 48,
 "borderRadius": 0,
 "shadow": false,
 "right": "0.75%",
 "propagateClick": false,
 "minHeight": 1,
 "minWidth": 1,
 "transparencyActive": true,
 "maxWidth": 48,
 "maxHeight": 48,
 "height": 48,
 "paddingLeft": 0,
 "mode": "toggle",
 "paddingRight": 0,
 "top": "10.04%",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_9CF134F3_8C8E_D0C5_41D3_E061CF90CE8B_pressed.png",
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton7052"
 },
 "class": "IconButton",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0,
 "verticalAlign": "middle"
},
{
 "id": "IconButton_9C1F5591_8C8F_5145_41DF_D7EBCDA13856",
 "iconURL": "skin/IconButton_9C1F5591_8C8F_5145_41DF_D7EBCDA13856.png",
 "width": 48,
 "borderRadius": 0,
 "shadow": false,
 "right": "0.67%",
 "propagateClick": false,
 "minHeight": 1,
 "minWidth": 1,
 "transparencyActive": true,
 "maxWidth": 48,
 "maxHeight": 48,
 "height": 48,
 "paddingLeft": 0,
 "mode": "toggle",
 "paddingRight": 0,
 "top": "17.88%",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_9C1F5591_8C8F_5145_41DF_D7EBCDA13856_pressed.png",
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton7613"
 },
 "class": "IconButton",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0,
 "verticalAlign": "middle"
},
{
 "id": "IconButton_9C298DD2_8C8E_B0C7_41BF_BB77624B120C",
 "iconURL": "skin/IconButton_9C298DD2_8C8E_B0C7_41BF_BB77624B120C.png",
 "width": 48,
 "borderRadius": 0,
 "shadow": false,
 "right": "0.6%",
 "propagateClick": false,
 "minHeight": 1,
 "minWidth": 1,
 "transparencyActive": true,
 "maxWidth": 48,
 "maxHeight": 48,
 "height": 48,
 "paddingLeft": 0,
 "mode": "toggle",
 "paddingRight": 0,
 "top": "26%",
 "borderSize": 0,
 "click": "if(!this.ThumbnailList_810D9187_8C85_714D_41D6_2417D45498CA.get('visible')){ this.setComponentVisibility(this.ThumbnailList_810D9187_8C85_714D_41D6_2417D45498CA, true, 0, this.effect_9E48991D_8C9D_517C_41C1_159CE22DE958, 'showEffect', false) } else { this.setComponentVisibility(this.ThumbnailList_810D9187_8C85_714D_41D6_2417D45498CA, false, 0, this.effect_9E49E91D_8C9D_517C_41C6_46B6DC89859B, 'hideEffect', false) }",
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton8150"
 },
 "class": "IconButton",
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0,
 "verticalAlign": "middle"
},
{
 "movements": [
  {
   "yawSpeed": 13.26,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawDelta": -18.5
  },
  {
   "yawSpeed": 13.26,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawDelta": -323
  },
  {
   "yawSpeed": 13.26,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawDelta": -18.5
  }
 ],
 "id": "sequence_998F739A_8C87_D147_41C6_C38AC1708BAB",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8A719EAE_81CD_53AD_41D6_E8A3DE2C7144, this.camera_998F639A_8C87_D147_41D3_4EFD5CB2D5A7); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_804C6FC2_8AEA_9121_41E0_8848C6DAFB91_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "hfov": 17.26,
   "yaw": -0.6,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.27
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9DC875A3_8C82_D145_41D6_2AF6012DD102",
   "pitch": -21.27,
   "yaw": -0.6,
   "hfov": 17.26,
   "distance": 100
  }
 ],
 "id": "overlay_9C475F83_8C82_D144_41DC_0C1374801F59",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "inertia": false,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "hfov": 45,
 "id": "panorama_804C6FC2_8AEA_9121_41E0_8848C6DAFB91_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_804C6FC2_8AEA_9121_41E0_8848C6DAFB91_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ]
 }
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_94708C14_81CB_B67C_41A6_AF697D39AA3F, this.camera_99AE23C9_8C87_D0C5_41E0_FE53BAB85D0E); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A719EAE_81CD_53AD_41D6_E8A3DE2C7144_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 23
     }
    ]
   },
   "hfov": 31.59,
   "yaw": 92.83,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.44
  }
 ],
 "items": [
  {
   "hfov": 31.59,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A719EAE_81CD_53AD_41D6_E8A3DE2C7144_0_HS_1_0.png",
      "width": 774,
      "class": "ImageResourceLevel",
      "height": 1149
     }
    ]
   },
   "pitch": -9.44,
   "yaw": 92.83,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_91273F1A_81C5_5275_41B8_AB896472FE7C",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_804C6FC2_8AEA_9121_41E0_8848C6DAFB91, this.camera_99BBD3B9_8C87_D144_41DC_B8BFA9FEBE66); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A719EAE_81CD_53AD_41D6_E8A3DE2C7144_0_HS_2_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "hfov": 17.45,
   "yaw": -167.18,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.65
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9DC9E5A3_8C82_D145_41E1_766047167237",
   "pitch": -19.65,
   "yaw": -167.18,
   "hfov": 17.45,
   "distance": 100
  }
 ],
 "id": "overlay_9D1E0328_8C86_B143_41B9_8A03DAF55DFA",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_805C6728_8AEA_9160_41D4_C31A702CC185, this.camera_99DC13C9_8C87_D0C5_41BD_972EA4EF14A8); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8A719EAE_81CD_53AD_41D6_E8A3DE2C7144_0_HS_3_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "hfov": 18.13,
   "yaw": 1.98,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.89
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9DC9C5A3_8C82_D145_41A5_82361AF1BFED",
   "pitch": -11.89,
   "yaw": 1.98,
   "hfov": 18.13,
   "distance": 100
  }
 ],
 "id": "overlay_9FA49B6A_8C86_D1C7_41D5_8367EA751B9B",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "inertia": false,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "hfov": 45,
 "id": "panorama_8A719EAE_81CD_53AD_41D6_E8A3DE2C7144_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_804C6FC2_8AEA_9121_41E0_8848C6DAFB91_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ]
 }
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8A719EAE_81CD_53AD_41D6_E8A3DE2C7144, this.camera_99CC63D9_8C87_D0C5_41C1_469FD5A05E0B); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_805C6728_8AEA_9160_41D4_C31A702CC185_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "hfov": 17.37,
   "yaw": -170.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.3
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9DC8C5A3_8C82_D145_41B9_540F3BF0CF7E",
   "pitch": -20.3,
   "yaw": -170.41,
   "hfov": 17.37,
   "distance": 100
  }
 ],
 "id": "overlay_9FDD165F_8C85_53FD_41C4_CF0811B3F665",
 "data": {
  "label": "Arrow 06"
 },
 "rollOverDisplay": false
},
{
 "inertia": false,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "hfov": 45,
 "id": "panorama_805C6728_8AEA_9160_41D4_C31A702CC185_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_804C6FC2_8AEA_9121_41E0_8848C6DAFB91_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ]
 }
},
{
 "movements": [
  {
   "yawSpeed": 13.26,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawDelta": -18.5
  },
  {
   "yawSpeed": 13.26,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawDelta": -323
  },
  {
   "yawSpeed": 13.26,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawDelta": -18.5
  }
 ],
 "id": "sequence_96683DDB_8245_B1F4_419F_B6F16E6B38B4",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8A719EAE_81CD_53AD_41D6_E8A3DE2C7144, this.camera_998143AA_8C87_D147_41DC_446D7794BA54); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_94708C14_81CB_B67C_41A6_AF697D39AA3F_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 23
     }
    ]
   },
   "hfov": 9.67,
   "yaw": 59.53,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.01
  }
 ],
 "items": [
  {
   "hfov": 9.67,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_94708C14_81CB_B67C_41A6_AF697D39AA3F_0_HS_0_0.png",
      "width": 234,
      "class": "ImageResourceLevel",
      "height": 344
     }
    ]
   },
   "pitch": -5.01,
   "yaw": 59.53,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_970D1878_8244_BEB4_41D2_B01D63E51120",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "inertia": false,
 "angle": 0,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "hfov": 45,
 "id": "panorama_94708C14_81CB_B67C_41A6_AF697D39AA3F_tcap0",
 "distance": 50,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_804C6FC2_8AEA_9121_41E0_8848C6DAFB91_tcap0.png",
    "width": 1080,
    "class": "ImageResourceLevel",
    "height": 1080
   }
  ]
 }
},
{
 "movements": [
  {
   "yawSpeed": 13.26,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawDelta": -18.5
  },
  {
   "yawSpeed": 13.26,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawDelta": -323
  },
  {
   "yawSpeed": 13.26,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawDelta": -18.5
  }
 ],
 "id": "sequence_998153AA_8C87_D147_41DE_CF26EA854411",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "movements": [
  {
   "yawSpeed": 13.26,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawDelta": -18.5
  },
  {
   "yawSpeed": 13.26,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawDelta": -323
  },
  {
   "yawSpeed": 13.26,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawDelta": -18.5
  }
 ],
 "id": "sequence_99CC43D9_8C87_D0C5_418F_55A07B1D4917",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_804C6FC2_8AEA_9121_41E0_8848C6DAFB91_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_9DC875A3_8C82_D145_41D6_2AF6012DD102",
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_8A719EAE_81CD_53AD_41D6_E8A3DE2C7144_0_HS_2_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_9DC9E5A3_8C82_D145_41E1_766047167237",
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_8A719EAE_81CD_53AD_41D6_E8A3DE2C7144_0_HS_3_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_9DC9C5A3_8C82_D145_41A5_82361AF1BFED",
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_805C6728_8AEA_9160_41D4_C31A702CC185_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_9DC8C5A3_8C82_D145_41B9_540F3BF0CF7E",
 "class": "AnimatedImageResource",
 "rowCount": 6
}],
 "shadow": false,
 "width": "100%",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "minWidth": 20,
 "backgroundPreloadEnabled": true,
 "overflow": "visible",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "paddingLeft": 0,
 "buttonToggleFullscreen": "this.IconButton_9CF134F3_8C8E_D0C5_41D3_E061CF90CE8B",
 "defaultVRPointer": "laser",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "height": "100%",
 "mobileMipmappingEnabled": false,
 "scripts": {
  "existsKey": function(key){  return key in window; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getKey": function(key){  return window[key]; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "registerKey": function(key, value){  window[key] = value; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "unregisterKey": function(key){  delete window[key]; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "buttonToggleMute": "this.IconButton_9C1F5591_8C8F_5145_41DF_D7EBCDA13856",
 "paddingBottom": 0,
 "downloadEnabled": false,
 "horizontalAlign": "left",
 "desktopMipmappingEnabled": false,
 "contentOpaque": false,
 "class": "Player",
 "paddingTop": 0,
 "verticalAlign": "top"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
