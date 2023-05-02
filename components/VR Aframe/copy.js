  <Scene camera="active: false">
      <a-camera position="0 1 0" rotation="0 90 0">
        <a-cursor></a-cursor>
      </a-camera>
      <a-assets>
        <a-asset-item
          id="tembokInfo2"
          src="./models/tembokInfo2.glb"
        ></a-asset-item>
        <a-asset-item
          id="tembokInfo"
          src="./models/tembokInfo.glb"
        ></a-asset-item>
        <a-asset-item
          id="frontMuseum"
          src="./models/FrontMuseum.glb"
        ></a-asset-item>
        <a-asset-item
          id="sideMuseum"
          src="./models/sideMuseum.glb"
        ></a-asset-item>
        <a-asset-item
          id="KontenSideMuseum"
          src="./models/kontenSejarahPurwakarta.glb"
        ></a-asset-item>
      </a-assets>

      <Entity
        id="cam"
        camera="active: true"
        look-controls
        wasd-controls
        position="0 1 10"
      />
      <Entity
        primitive="a-plane"
        rotation="-90 0 0"
        height="1000"
        width="1000"
        material={{ color: "#215763", opacity: 1 }}
      />
      <Entity gltf-model="#frontMuseum" rotation="0 90 0" />
      <Entity
        gltf-model="#tembokInfo2"
        rotation="0 90 0"
        scale="0.9 0.9 0.9"
        position="-5 0 -65"
      />
      <Entity
        gltf-model="#tembokInfo"
        rotation="0 180 0"
        scale="0.9 0.9 0.9"
        position="5 0 -65"
      />
      <Entity gltf-model="#sideMuseum" position="-31 0 -95" scale="2 2 2" />
      <Entity
        gltf-model="#KontenSideMuseum"
        position="-31 0 -94.8"
        scale="1.9 1.9 1.9"
      />
      <FrontSide />
    </Scene>