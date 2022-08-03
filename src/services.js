import { init } from "@web3-onboard/react"
import injectedModule from '@web3-onboard/injected-wallets'
// import ledgerModule from '@web3-onboard/ledger'
import torusModule from '@web3-onboard/torus'
import walletConnectModule from '@web3-onboard/walletconnect'
import coinbaseModule from '@web3-onboard/coinbase'
import gnosisModule from '@web3-onboard/gnosis'

const initWeb3Onboard = init({
    wallets: [
      injectedModule(),
      // ledgerModule(),
      coinbaseModule(),
      walletConnectModule(),
      gnosisModule(),
      torusModule()
    ],
    chains: [
      {
        // TESTING : 0x4
        // PRODUCTION : 0x1
        id: '0x1',
        token: 'ETH',
        label: 'Ethereum',
        // WORKING : https://eth-mainnet.alchemyapi.io/v2/b1mLSbOw7QcQpCDW88sZEbBf7OHBChYq
        // TESTNNET : https://eth-rinkeby.alchemyapi.io/v2/AVSzv_X7HJtkQChIk3ncc8RolOzYnCTr
        // MAINNET : https://eth-mainnet.alchemyapi.io/v2/363c613b6c524ebe86ce01dc2f6511d9
        rpcUrl: `https://eth-mainnet.alchemyapi.io/v2/b1mLSbOw7QcQpCDW88sZEbBf7OHBChYq`
      },
      {
        // TESTING : 0x4
        // PRODUCTION : 0x1
        id: '0x4',
        token: 'RIN',
        label: 'Rinkeby',
        // WORKING : https://eth-mainnet.alchemyapi.io/v2/b1mLSbOw7QcQpCDW88sZEbBf7OHBChYq
        // TESTNNET : https://eth-rinkeby.alchemyapi.io/v2/AVSzv_X7HJtkQChIk3ncc8RolOzYnCTr
        // MAINNET : https://eth-mainnet.alchemyapi.io/v2/363c613b6c524ebe86ce01dc2f6511d9
        rpcUrl: `https://eth-rinkeby.alchemyapi.io/v2/AVSzv_X7HJtkQChIk3ncc8RolOzYnCTr`
      },
    ],
    appMetadata: {
      name: 'SACRD GARDN',
      icon: `<?xml version="1.0" encoding="utf-8" standalone="yes"?>
      <Aps>
        <Group>
          <Page Width="500" Height="500" PaperTray="0">
            <Canvas>
              <Canvas>
                <Clip>
                  <Path FillMode="Winding">
                    <PathFigure IsClosed="True">
                      <PolyLine LineColor="#FF000000">
                        <Point X="0" Y="500" />
                        <Point X="0" Y="0" />
                      </PolyLine>
                      <PolyLine LineColor="#FF000000">
                        <Point X="0" Y="0" />
                        <Point X="500" Y="0" />
                      </PolyLine>
                      <PolyLine LineColor="#FF000000">
                        <Point X="500" Y="0" />
                        <Point X="500" Y="500" />
                      </PolyLine>
                      <PolyLine LineColor="#FF000000">
                        <Point X="500" Y="500" />
                        <Point X="0" Y="500" />
                      </PolyLine>
                    </PathFigure>
                  </Path>
                </Clip>
                <Path FillMode="Winding" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544B" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="20">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <PolyLine LineColor="#FF000000">
                      <Point X="81" Y="267.00003" />
                      <Point X="81" Y="267.00003" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="81" Y="267.00003" />
                      <Point X="156.4" Y="267.00003" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="156.4" Y="267.00003" />
                      <Point X="156.4" Y="256.2" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="156.4" Y="256.2" />
                      <Point X="81" Y="256.2" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Winding" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544B" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="20">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <PolyLine LineColor="#FF000000">
                      <Point X="339.59998" Y="266.59998" />
                      <Point X="339.59998" Y="266.59998" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="339.59998" Y="266.59998" />
                      <Point X="415" Y="266.59998" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="415" Y="266.59998" />
                      <Point X="415" Y="255.8" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="415" Y="255.8" />
                      <Point X="339.59998" Y="255.8" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Winding" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544B" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="19.999998">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <PolyLine LineColor="#FF000000">
                      <Point X="81.946304" Y="336.25958" />
                      <Point X="81.946304" Y="336.25958" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="81.946304" Y="336.25958" />
                      <Point X="86.07927" Y="346.2375" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="86.07927" Y="346.2375" />
                      <Point X="159.80487" Y="315.69937" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="159.80487" Y="315.69937" />
                      <Point X="155.67189" Y="305.72147" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Winding" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544B" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="19.999998">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <PolyLine LineColor="#FF000000">
                      <Point X="335.9118" Y="315.37158" />
                      <Point X="335.9118" Y="315.37158" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="335.9118" Y="315.37158" />
                      <Point X="410.1917" Y="346.13934" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="410.1917" Y="346.13934" />
                      <Point X="414.3247" Y="336.16144" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="414.3247" Y="336.16144" />
                      <Point X="340.0448" Y="305.39368" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Winding" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544B" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="19.999998">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <PolyLine LineColor="#FF000000">
                      <Point X="90.8285" Y="191.77525" />
                      <Point X="90.8285" Y="191.77525" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="90.8285" Y="191.77525" />
                      <Point X="160.48898" Y="220.62958" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="160.48898" Y="220.62958" />
                      <Point X="164.62198" Y="210.6517" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="164.62198" Y="210.6517" />
                      <Point X="94.961464" Y="181.79738" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Winding" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544B" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="19.999998">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <PolyLine LineColor="#FF000000">
                      <Point X="331.44662" Y="210.68787" />
                      <Point X="331.44662" Y="210.68787" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="331.44662" Y="210.68787" />
                      <Point X="335.57962" Y="220.66577" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="335.57962" Y="220.66577" />
                      <Point X="405.24008" Y="191.81143" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="405.24008" Y="191.81143" />
                      <Point X="401.1071" Y="181.83353" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Winding" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544B" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <PolyLine LineColor="#FF000000">
                      <Point X="247.8" Y="122.20001" />
                      <Point X="247.8" Y="122.20001" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="247.8" Y="122.20001" />
                      <Point X="247.8" Y="122.20001" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="247.8" Y="122.20001" />
                      <Point X="248.80002" Y="122.20001" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="248.80002" Y="122.20001" />
                      <Point X="248.80002" Y="122.20001" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="248.80002" Y="122.20001" />
                      <ControlPoint1 X="277.40002" Y="127.60004" />
                      <ControlPoint2 X="300.00003" Y="142.40002" />
                      <EndPoint X="316.2" Y="166.00003" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="316.2" Y="166.00003" />
                      <Point X="316.2" Y="166.00003" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="316.2" Y="166.00003" />
                      <ControlPoint1 X="326.80002" Y="181.40002" />
                      <ControlPoint2 X="334.40002" Y="200.80002" />
                      <EndPoint X="339.2" Y="223.6" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="339.2" Y="223.6" />
                      <Point X="339.2" Y="223.6" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="339.2" Y="223.6" />
                      <ControlPoint1 X="343.00003" Y="241.6" />
                      <ControlPoint2 X="344.80002" Y="261.8" />
                      <EndPoint X="345.00003" Y="283.6" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="345.00003" Y="283.6" />
                      <Point X="345.00003" Y="283.6" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="345.00003" Y="283.6" />
                      <ControlPoint1 X="345.00003" Y="320.6" />
                      <ControlPoint2 X="339.6" Y="349.2" />
                      <EndPoint X="339.40002" Y="350.40002" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="339.40002" Y="350.40002" />
                      <Point X="328.80002" Y="348.40002" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="328.80002" Y="348.40002" />
                      <ControlPoint1 X="328.80002" Y="348.40002" />
                      <ControlPoint2 X="334.2" Y="319.40002" />
                      <EndPoint X="334.2" Y="283.40002" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="334.2" Y="283.40002" />
                      <Point X="334.2" Y="283.40002" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="334.2" Y="283.40002" />
                      <ControlPoint1 X="334.2" Y="250.40001" />
                      <ControlPoint2 X="329.40002" Y="204.40002" />
                      <EndPoint X="307.20004" Y="172.00003" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="307.20004" Y="172.00003" />
                      <Point X="307.20004" Y="172.00003" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="307.20004" Y="172.00003" />
                      <ControlPoint1 X="293.00003" Y="151.20004" />
                      <ControlPoint2 X="273.00003" Y="138.00003" />
                      <EndPoint X="247.80003" Y="133.20004" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="247.80003" Y="133.20004" />
                      <Point X="247.80003" Y="133.20004" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="247.80003" Y="133.20004" />
                      <ControlPoint1 X="222.60004" Y="138.20004" />
                      <ControlPoint2 X="202.60004" Y="151.20004" />
                      <EndPoint X="188.40004" Y="172.00003" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="188.40004" Y="172.00003" />
                      <Point X="188.40004" Y="172.00003" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="188.40004" Y="172.00003" />
                      <ControlPoint1 X="166.20004" Y="204.40002" />
                      <ControlPoint2 X="161.60004" Y="250.40004" />
                      <EndPoint X="161.40004" Y="283.40002" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="161.40004" Y="283.40002" />
                      <Point X="161.40004" Y="283.40002" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="161.40004" Y="283.40002" />
                      <ControlPoint1 X="161.40004" Y="319.40002" />
                      <ControlPoint2 X="166.80003" Y="348" />
                      <EndPoint X="166.80003" Y="348.40002" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="166.80003" Y="348.40002" />
                      <Point X="156.20004" Y="350.40002" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="156.20004" Y="350.40002" />
                      <ControlPoint1 X="156.00003" Y="349.2" />
                      <ControlPoint2 X="150.60004" Y="320.6" />
                      <EndPoint X="150.60004" Y="283.6" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="150.60004" Y="283.6" />
                      <Point X="150.60004" Y="283.6" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="150.60004" Y="283.6" />
                      <ControlPoint1 X="150.60004" Y="261.8" />
                      <ControlPoint2 X="152.60004" Y="241.6" />
                      <EndPoint X="156.40004" Y="223.6" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="156.40004" Y="223.6" />
                      <Point X="156.40004" Y="223.6" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="156.40004" Y="223.6" />
                      <ControlPoint1 X="161.20004" Y="200.80002" />
                      <ControlPoint2 X="169.00003" Y="181.4" />
                      <EndPoint X="179.40004" Y="166.00003" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="179.40004" Y="166.00003" />
                      <Point X="179.40004" Y="166.00003" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="179.40004" Y="166.00003" />
                      <ControlPoint1 X="195.60005" Y="142.40002" />
                      <ControlPoint2 X="218.20004" Y="127.80002" />
                      <EndPoint X="246.80005" Y="122.400024" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="246.80005" Y="122.400024" />
                      <Point X="246.80005" Y="122.400024" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="246.80005" Y="122.400024" />
                      <Point X="247.80006" Y="122.400024" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Winding" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544B" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <PolyLine LineColor="#FF000000">
                      <Point X="250.19998" Y="234.4" />
                      <Point X="250.19998" Y="234.4" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="250.19998" Y="234.4" />
                      <Point X="250.19998" Y="234.4" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="250.19998" Y="234.4" />
                      <Point X="260.99997" Y="234.4" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="260.99997" Y="234.4" />
                      <Point X="260.99997" Y="234.4" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="260.99997" Y="234.4" />
                      <Point X="260.99997" Y="289" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="260.99997" Y="289" />
                      <Point X="260.99997" Y="289" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="260.99997" Y="289" />
                      <ControlPoint1 X="268.59998" Y="305.2" />
                      <ControlPoint2 X="278.59998" Y="314.6" />
                      <EndPoint X="290.39996" Y="317.2" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="290.39996" Y="317.2" />
                      <Point X="290.39996" Y="317.2" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="290.39996" Y="317.2" />
                      <ControlPoint1 X="312" Y="322" />
                      <ControlPoint2 X="334.19998" Y="303.2" />
                      <EndPoint X="334.39996" Y="303" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="334.39996" Y="303" />
                      <Point X="341.39996" Y="311.2" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="341.39996" Y="311.2" />
                      <ControlPoint1 X="340.39996" Y="312.2" />
                      <ControlPoint2 X="314.99997" Y="333.6" />
                      <EndPoint X="288.19995" Y="327.6" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="288.19995" Y="327.6" />
                      <Point X="288.19995" Y="327.6" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="288.19995" Y="327.6" />
                      <ControlPoint1 X="272.59998" Y="324.2" />
                      <ControlPoint2 X="259.99997" Y="312.2" />
                      <EndPoint X="250.79996" Y="292.2" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="250.79996" Y="292.2" />
                      <Point X="250.39995" Y="291.2" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="250.39995" Y="291.2" />
                      <Point X="250.39995" Y="291.2" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="250.39995" Y="291.2" />
                      <Point X="250.39995" Y="234.4" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Winding" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544B" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="248.2" Y="199.4" />
                      <ControlPoint1 X="249.59999" Y="199.4" />
                      <ControlPoint2 X="250.99998" Y="200" />
                      <EndPoint X="251.99998" Y="201.00003" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="251.99998" Y="201.00003" />
                      <Point X="261.59998" Y="210.6" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="261.59998" Y="210.6" />
                      <Point X="261.59998" Y="210.6" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="261.59998" Y="210.6" />
                      <Point X="277.19998" Y="210.6" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="277.19998" Y="210.6" />
                      <Point X="277.19998" Y="210.6" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="277.19998" Y="210.6" />
                      <Point X="277.19998" Y="221.4" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="277.19998" Y="221.4" />
                      <Point X="277.19998" Y="221.4" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="277.19998" Y="221.4" />
                      <Point X="259.19998" Y="221.4" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="259.19998" Y="221.4" />
                      <Point X="259.19998" Y="221.4" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="259.19998" Y="221.4" />
                      <ControlPoint1 X="257.8" Y="221.4" />
                      <ControlPoint2 X="256.4" Y="220.79999" />
                      <EndPoint X="255.39998" Y="219.79999" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="255.39998" Y="219.79999" />
                      <Point X="247.99997" Y="212.4" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="247.99997" Y="212.4" />
                      <Point X="240.99998" Y="219.4" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="240.99998" Y="219.4" />
                      <Point X="240.99998" Y="219.4" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="240.99998" Y="219.4" />
                      <ControlPoint1 X="239.99997" Y="220.4" />
                      <ControlPoint2 X="238.59998" Y="221" />
                      <EndPoint X="237.19998" Y="221" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="237.19998" Y="221" />
                      <Point X="237.19998" Y="221" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="237.19998" Y="221" />
                      <Point X="219.79997" Y="221" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="219.79997" Y="221" />
                      <Point X="219.79997" Y="221" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="219.79997" Y="221" />
                      <Point X="219.79997" Y="210.20001" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="219.79997" Y="210.20001" />
                      <Point X="219.79997" Y="210.20001" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="219.79997" Y="210.20001" />
                      <Point X="234.79997" Y="210.20001" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="234.79997" Y="210.20001" />
                      <Point X="243.99998" Y="201" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="243.99998" Y="201" />
                      <Point X="243.99998" Y="201" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="243.99998" Y="201" />
                      <ControlPoint1 X="245" Y="199.99997" />
                      <ControlPoint2 X="246.4" Y="199.4" />
                      <EndPoint X="247.79999" Y="199.4" />
                    </Bezier>
                  </PathFigure>
                </Path>
                <Path FillMode="Winding" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FFFFAC80" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="263.8" Y="175.60004" />
                      <ControlPoint1 X="258" Y="178.60004" />
                      <ControlPoint2 X="255" Y="179.20004" />
                      <EndPoint X="253.99998" Y="179.20004" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="253.99998" Y="179.20004" />
                      <Point X="253.99998" Y="179.20004" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="253.99998" Y="179.20004" />
                      <ControlPoint1 X="253.99998" Y="179.00006" />
                      <ControlPoint2 X="253.99998" Y="178.60004" />
                      <EndPoint X="253.99998" Y="178.00003" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="253.99998" Y="178.00003" />
                      <Point X="253.99998" Y="178.00003" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="253.99998" Y="178.00003" />
                      <Point X="243.39998" Y="178.00003" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="243.39998" Y="178.00003" />
                      <Point X="243.39998" Y="178.00003" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="243.39998" Y="178.00003" />
                      <ControlPoint1 X="243.39998" Y="178.00003" />
                      <ControlPoint2 X="243.39998" Y="178.80002" />
                      <EndPoint X="243.39998" Y="179.00006" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="243.39998" Y="179.00006" />
                      <Point X="243.39998" Y="179.00006" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="243.39998" Y="179.00006" />
                      <ControlPoint1 X="242.19998" Y="179.00006" />
                      <ControlPoint2 X="239.19998" Y="178.40005" />
                      <EndPoint X="233.39998" Y="175.40005" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="233.39998" Y="175.40005" />
                      <Point X="233.39998" Y="175.40005" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="233.39998" Y="175.40005" />
                      <ControlPoint1 X="232.39998" Y="174.80005" />
                      <ControlPoint2 X="231.4" Y="174.40002" />
                      <EndPoint X="230.59999" Y="173.80002" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="230.59999" Y="173.80002" />
                      <Point X="230.59999" Y="173.80002" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="230.59999" Y="173.80002" />
                      <ControlPoint1 X="236.4" Y="169.40002" />
                      <ControlPoint2 X="242.59999" Y="167.20001" />
                      <EndPoint X="248.79999" Y="167.20001" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="248.79999" Y="167.20001" />
                      <Point X="248.79999" Y="167.20001" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="248.79999" Y="167.20001" />
                      <ControlPoint1 X="256.4" Y="167.20001" />
                      <ControlPoint2 X="262.8" Y="170.80002" />
                      <EndPoint X="267" Y="173.80002" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="267" Y="173.80002" />
                      <Point X="267" Y="173.80002" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="267" Y="173.80002" />
                      <ControlPoint1 X="266.19998" Y="174.40002" />
                      <ControlPoint2 X="265.19998" Y="174.80005" />
                      <EndPoint X="264.2" Y="175.40005" />
                    </Bezier>
                  </PathFigure>
                  <PathFigure IsClosed="True">
                    <PolyLine LineColor="#FF000000">
                      <Point X="217.59999" Y="170.80002" />
                      <Point X="217.59999" Y="170.80002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="217.59999" Y="170.80002" />
                      <Point X="213.2" Y="175.20001" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="213.2" Y="175.20001" />
                      <Point X="218.39998" Y="178.80002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="218.39998" Y="178.80002" />
                      <Point X="218.39998" Y="178.80002" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="218.39998" Y="178.80002" />
                      <ControlPoint1 X="218.39998" Y="178.80002" />
                      <ControlPoint2 X="223.2" Y="182.20001" />
                      <EndPoint X="228.79999" Y="185.00003" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="228.79999" Y="185.00003" />
                      <Point X="228.79999" Y="185.00003" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="228.79999" Y="185.00003" />
                      <ControlPoint1 X="237.59999" Y="189.60004" />
                      <ControlPoint2 X="243.79999" Y="190.60004" />
                      <EndPoint X="248.39998" Y="188.20004" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="248.39998" Y="188.20004" />
                      <Point X="248.39998" Y="188.20004" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="248.39998" Y="188.20004" />
                      <Point X="248.99998" Y="188.20004" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="248.99998" Y="188.20004" />
                      <Point X="248.99998" Y="188.20004" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="248.99998" Y="188.20004" />
                      <ControlPoint1 X="253.59998" Y="190.60004" />
                      <ControlPoint2 X="260" Y="189.40002" />
                      <EndPoint X="268.59998" Y="185.00003" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="268.59998" Y="185.00003" />
                      <Point X="268.59998" Y="185.00003" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="268.59998" Y="185.00003" />
                      <ControlPoint1 X="273.99997" Y="182.00003" />
                      <ControlPoint2 X="278.59998" Y="178.80002" />
                      <EndPoint X="278.79996" Y="178.60004" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="278.79996" Y="178.60004" />
                      <Point X="283.59998" Y="175.00003" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="283.59998" Y="175.00003" />
                      <Point X="279.59998" Y="170.60004" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="279.59998" Y="170.60004" />
                      <Point X="279.59998" Y="170.60004" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="279.59998" Y="170.60004" />
                      <ControlPoint1 X="279.59998" Y="170.60004" />
                      <ControlPoint2 X="266.59998" Y="156.80005" />
                      <EndPoint X="248.99998" Y="156.40002" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="248.99998" Y="156.40002" />
                      <Point X="248.99998" Y="156.40002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="248.99998" Y="156.40002" />
                      <Point X="248.2" Y="156.40002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="248.2" Y="156.40002" />
                      <Point X="248.2" Y="156.40002" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="248.2" Y="156.40002" />
                      <ControlPoint1 X="237.4" Y="156.40002" />
                      <ControlPoint2 X="227.19998" Y="161.20004" />
                      <EndPoint X="217.79999" Y="170.40002" />
                    </Bezier>
                  </PathFigure>
                </Path>
                <Path FillMode="Winding" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544C" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="253.39998" Y="178.20004" />
                      <ControlPoint1 X="253.39998" Y="178.20004" />
                      <ControlPoint2 X="253.39998" Y="179.00003" />
                      <EndPoint X="253.39998" Y="179.40002" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="253.39998" Y="179.40002" />
                      <Point X="253.39998" Y="179.40002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="253.39998" Y="179.40002" />
                      <Point X="253.59998" Y="179.40002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="253.59998" Y="179.40002" />
                      <Point X="253.59998" Y="179.40002" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="253.59998" Y="179.40002" />
                      <ControlPoint1 X="254.79997" Y="179.40002" />
                      <ControlPoint2 X="257.8" Y="178.80002" />
                      <EndPoint X="263.19995" Y="175.80002" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="263.19995" Y="175.80002" />
                      <Point X="263.19995" Y="175.80002" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="263.19995" Y="175.80002" />
                      <ControlPoint1 X="264.19998" Y="175.20001" />
                      <ControlPoint2 X="265.19995" Y="174.80002" />
                      <EndPoint X="265.99994" Y="174.20001" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="265.99994" Y="174.20001" />
                      <Point X="265.99994" Y="174.20001" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="265.99994" Y="174.20001" />
                      <ControlPoint1 X="261.79996" Y="171.20001" />
                      <ControlPoint2 X="255.39995" Y="167.80002" />
                      <EndPoint X="247.79996" Y="167.6" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="247.79996" Y="167.6" />
                      <Point X="247.79996" Y="167.6" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="247.79996" Y="167.6" />
                      <Point X="247.39995" Y="167.6" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="247.39995" Y="167.6" />
                      <Point X="247.39995" Y="167.6" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="247.39995" Y="167.6" />
                      <ControlPoint1 X="241.39993" Y="167.6" />
                      <ControlPoint2 X="235.39995" Y="169.80002" />
                      <EndPoint X="229.79996" Y="174.20001" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="229.79996" Y="174.20001" />
                      <Point X="229.79996" Y="174.20001" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="229.79996" Y="174.20001" />
                      <ControlPoint1 X="230.59995" Y="174.80002" />
                      <ControlPoint2 X="231.59996" Y="175.20001" />
                      <EndPoint X="232.59995" Y="175.80002" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="232.59995" Y="175.80002" />
                      <Point X="232.59995" Y="175.80002" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="232.59995" Y="175.80002" />
                      <ControlPoint1 X="237.99995" Y="178.80002" />
                      <ControlPoint2 X="241.19995" Y="179.40002" />
                      <EndPoint X="242.39995" Y="179.40002" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="242.39995" Y="179.40002" />
                      <Point X="242.39995" Y="179.40002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="242.39995" Y="179.40002" />
                      <Point X="242.39995" Y="179.40002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="242.39995" Y="179.40002" />
                      <Point X="242.39995" Y="179.40002" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="242.39995" Y="179.40002" />
                      <ControlPoint1 X="242.39995" Y="179.40002" />
                      <ControlPoint2 X="242.39995" Y="179.00003" />
                      <EndPoint X="242.39995" Y="178.60004" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="242.39995" Y="178.60004" />
                      <Point X="242.39995" Y="178.60004" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="242.39995" Y="178.60004" />
                      <Point X="252.99995" Y="178.60004" />
                    </PolyLine>
                  </PathFigure>
                  <PathFigure IsClosed="True">
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="253.99998" Y="189.80002" />
                      <ControlPoint1 X="251.99998" Y="189.80002" />
                      <ControlPoint2 X="250.39998" Y="189.4" />
                      <EndPoint X="248.79999" Y="188.6" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="248.79999" Y="188.6" />
                      <Point X="248.79999" Y="188.6" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="248.79999" Y="188.6" />
                      <Point X="248.2" Y="188.6" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="248.2" Y="188.6" />
                      <Point X="248.2" Y="188.6" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="248.2" Y="188.6" />
                      <ControlPoint1 X="246.59998" Y="189.20001" />
                      <ControlPoint2 X="244.8" Y="189.60004" />
                      <EndPoint X="242.79999" Y="189.60004" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="242.79999" Y="189.60004" />
                      <Point X="242.79999" Y="189.60004" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="242.79999" Y="189.60004" />
                      <ControlPoint1 X="238.99998" Y="189.60004" />
                      <ControlPoint2 X="234.19998" Y="188.20004" />
                      <EndPoint X="228.39998" Y="185.00003" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="228.39998" Y="185.00003" />
                      <Point X="228.39998" Y="185.00003" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="228.39998" Y="185.00003" />
                      <ControlPoint1 X="222.79999" Y="182.20004" />
                      <ControlPoint2 X="218.2" Y="178.80002" />
                      <EndPoint X="217.99997" Y="178.80002" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="217.99997" Y="178.80002" />
                      <Point X="212.79997" Y="175.20001" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="212.79997" Y="175.20001" />
                      <Point X="217.19998" Y="170.80002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="217.19998" Y="170.80002" />
                      <Point X="217.19998" Y="170.80002" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="217.19998" Y="170.80002" />
                      <ControlPoint1 X="226.59998" Y="161.40002" />
                      <ControlPoint2 X="236.79997" Y="156.80005" />
                      <EndPoint X="247.59999" Y="156.80005" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="247.59999" Y="156.80005" />
                      <Point X="247.59999" Y="156.80005" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="247.59999" Y="156.80005" />
                      <Point X="248.39998" Y="156.80005" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="248.39998" Y="156.80005" />
                      <Point X="248.39998" Y="156.80005" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="248.39998" Y="156.80005" />
                      <ControlPoint1 X="266.19998" Y="157.20004" />
                      <ControlPoint2 X="278.59998" Y="170.40005" />
                      <EndPoint X="278.99997" Y="171.00003" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="278.99997" Y="171.00003" />
                      <Point X="282.99997" Y="175.40005" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="282.99997" Y="175.40005" />
                      <Point X="278.19995" Y="179.00006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="278.19995" Y="179.00006" />
                      <Point X="278.19995" Y="179.00006" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="278.19995" Y="179.00006" />
                      <ControlPoint1 X="278.19995" Y="179.00006" />
                      <ControlPoint2 X="273.59998" Y="182.40002" />
                      <EndPoint X="267.99997" Y="185.40005" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="267.99997" Y="185.40005" />
                      <Point X="267.99997" Y="185.40005" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="267.99997" Y="185.40005" />
                      <ControlPoint1 X="262.19998" Y="188.40005" />
                      <ControlPoint2 X="257.39996" Y="190.00003" />
                      <EndPoint X="253.59998" Y="190.00003" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="253.59998" Y="190.00003" />
                      <Point X="253.59998" Y="190.00003" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="253.59998" Y="190.00003" />
                      <Point X="253.59998" Y="190.00003" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Winding" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544B" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <PolyLine LineColor="#FF000000">
                      <Point X="223.6" Y="294.59998" />
                      <Point X="223.6" Y="294.59998" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="223.6" Y="294.59998" />
                      <Point X="233" Y="299.8" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="233" Y="299.8" />
                      <Point X="233" Y="299.8" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="233" Y="299.8" />
                      <ControlPoint1 X="223.40001" Y="317.2" />
                      <ControlPoint2 X="211.40001" Y="327.2" />
                      <EndPoint X="197.20001" Y="329.2" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="197.20001" Y="329.2" />
                      <Point X="197.20001" Y="329.2" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="197.20001" Y="329.2" />
                      <ControlPoint1 X="174.40001" Y="332.6" />
                      <ControlPoint2 X="155.00002" Y="314" />
                      <EndPoint X="154.2" Y="313.2" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="154.2" Y="313.2" />
                      <Point X="161.6" Y="305.6" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="161.6" Y="305.6" />
                      <Point X="157.8" Y="309.40002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="157.8" Y="309.40002" />
                      <Point X="161.6" Y="305.6" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="161.6" Y="305.6" />
                      <Point X="161.6" Y="305.6" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="161.6" Y="305.6" />
                      <ControlPoint1 X="161.6" Y="305.6" />
                      <ControlPoint2 X="178" Y="321.2" />
                      <EndPoint X="195.6" Y="318.6" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="195.6" Y="318.6" />
                      <Point X="195.6" Y="318.6" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="195.6" Y="318.6" />
                      <ControlPoint1 X="206.20001" Y="317" />
                      <ControlPoint2 X="215.60002" Y="308.80002" />
                      <EndPoint X="223.40001" Y="294.6" />
                    </Bezier>
                  </PathFigure>
                </Path>
                <Path FillMode="Alternate" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544B" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="False">
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="313.59998" Y="271.4" />
                      <ControlPoint1 X="313.59998" Y="274.05096" />
                      <ControlPoint2 X="312.66272" Y="276.3137" />
                      <EndPoint X="310.7882" Y="278.18823" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="310.7882" Y="278.18823" />
                      <Point X="310.7882" Y="278.18823" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="310.7882" Y="278.18823" />
                      <ControlPoint1 X="308.9137" Y="280.0627" />
                      <ControlPoint2 X="306.65094" Y="281" />
                      <EndPoint X="303.99997" Y="281" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="303.99997" Y="281" />
                      <Point X="303.99997" Y="281" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="303.99997" Y="281" />
                      <ControlPoint1 X="301.34903" Y="281" />
                      <ControlPoint2 X="299.0863" Y="280.0627" />
                      <EndPoint X="297.21176" Y="278.18823" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="297.21176" Y="278.18823" />
                      <Point X="297.21176" Y="278.18823" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="297.21176" Y="278.18823" />
                      <ControlPoint1 X="295.33725" Y="276.3137" />
                      <ControlPoint2 X="294.4" Y="274.05096" />
                      <EndPoint X="294.4" Y="271.4" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="294.4" Y="271.4" />
                      <Point X="294.4" Y="271.4" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="294.4" Y="271.4" />
                      <ControlPoint1 X="294.4" Y="268.74902" />
                      <ControlPoint2 X="295.33725" Y="266.48627" />
                      <EndPoint X="297.21176" Y="264.61176" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="297.21176" Y="264.61176" />
                      <Point X="297.21176" Y="264.61176" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="297.21176" Y="264.61176" />
                      <ControlPoint1 X="299.0863" Y="262.73724" />
                      <ControlPoint2 X="301.34903" Y="261.8" />
                      <EndPoint X="303.99997" Y="261.8" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="303.99997" Y="261.8" />
                      <Point X="303.99997" Y="261.8" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="303.99997" Y="261.8" />
                      <ControlPoint1 X="306.65094" Y="261.8" />
                      <ControlPoint2 X="308.9137" Y="262.73724" />
                      <EndPoint X="310.7882" Y="264.61176" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="310.7882" Y="264.61176" />
                      <Point X="310.7882" Y="264.61176" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="310.7882" Y="264.61176" />
                      <ControlPoint1 X="312.66272" Y="266.48627" />
                      <ControlPoint2 X="313.59998" Y="268.74902" />
                      <EndPoint X="313.59998" Y="271.4" />
                    </Bezier>
                  </PathFigure>
                </Path>
                <Path FillMode="Alternate" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544B" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="False">
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="201.79999" Y="271.4" />
                      <ControlPoint1 X="201.8" Y="274.05096" />
                      <ControlPoint2 X="200.86275" Y="276.3137" />
                      <EndPoint X="198.9882" Y="278.18823" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="198.9882" Y="278.18823" />
                      <Point X="198.9882" Y="278.18823" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="198.9882" Y="278.18823" />
                      <ControlPoint1 X="197.11371" Y="280.0627" />
                      <ControlPoint2 X="194.85097" Y="281" />
                      <EndPoint X="192.19998" Y="281" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="192.19998" Y="281" />
                      <Point X="192.19998" Y="281" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="192.19998" Y="281" />
                      <ControlPoint1 X="189.54903" Y="281" />
                      <ControlPoint2 X="187.28627" Y="280.0627" />
                      <EndPoint X="185.41176" Y="278.18823" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="185.41176" Y="278.18823" />
                      <Point X="185.41176" Y="278.18823" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="185.41176" Y="278.18823" />
                      <ControlPoint1 X="183.53723" Y="276.3137" />
                      <ControlPoint2 X="182.59998" Y="274.05096" />
                      <EndPoint X="182.59998" Y="271.4" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="182.59998" Y="271.4" />
                      <Point X="182.59998" Y="271.4" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="182.59998" Y="271.4" />
                      <ControlPoint1 X="182.59998" Y="268.74902" />
                      <ControlPoint2 X="183.53723" Y="266.48627" />
                      <EndPoint X="185.41176" Y="264.61176" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="185.41176" Y="264.61176" />
                      <Point X="185.41176" Y="264.61176" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="185.41176" Y="264.61176" />
                      <ControlPoint1 X="187.28627" Y="262.73724" />
                      <ControlPoint2 X="189.54903" Y="261.8" />
                      <EndPoint X="192.19998" Y="261.8" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="192.19998" Y="261.8" />
                      <Point X="192.19998" Y="261.8" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="192.19998" Y="261.8" />
                      <ControlPoint1 X="194.85097" Y="261.8" />
                      <ControlPoint2 X="197.11371" Y="262.73724" />
                      <EndPoint X="198.9882" Y="264.61176" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="198.9882" Y="264.61176" />
                      <Point X="198.9882" Y="264.61176" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="198.9882" Y="264.61176" />
                      <ControlPoint1 X="200.86275" Y="266.48627" />
                      <ControlPoint2 X="201.8" Y="268.74902" />
                      <EndPoint X="201.79999" Y="271.4" />
                    </Bezier>
                  </PathFigure>
                </Path>
                <Path FillMode="Alternate" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FFFFAC80" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="20">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="False">
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="228.40001" Y="433.2" />
                      <ControlPoint1 X="228.40001" Y="466.22662" />
                      <ControlPoint2 X="237.44385" Y="493" />
                      <EndPoint X="248.6" Y="493" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="248.6" Y="493" />
                      <Point X="248.6" Y="493" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="248.6" Y="493" />
                      <ControlPoint1 X="259.75616" Y="493" />
                      <ControlPoint2 X="268.8" Y="466.22662" />
                      <EndPoint X="268.8" Y="433.2" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="268.8" Y="433.2" />
                      <Point X="268.8" Y="433.2" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="268.8" Y="433.2" />
                      <ControlPoint1 X="268.8" Y="400.17337" />
                      <ControlPoint2 X="259.75616" Y="373.4" />
                      <EndPoint X="248.6" Y="373.4" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="248.6" Y="373.4" />
                      <Point X="248.6" Y="373.4" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="248.6" Y="373.4" />
                      <ControlPoint1 X="237.44385" Y="373.4" />
                      <ControlPoint2 X="228.40001" Y="400.17337" />
                      <EndPoint X="228.40001" Y="433.2" />
                    </Bezier>
                  </PathFigure>
                </Path>
                <Path FillMode="Winding" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544C" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="248.6" Y="493" />
                      <ControlPoint1 X="237.4" Y="493" />
                      <ControlPoint2 X="228.40001" Y="466.2" />
                      <EndPoint X="228.40001" Y="433.2" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="228.40001" Y="433.2" />
                      <Point X="228.40001" Y="433.2" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="228.40001" Y="433.2" />
                      <ControlPoint1 X="228.40001" Y="400.2" />
                      <ControlPoint2 X="237.4" Y="373.4" />
                      <EndPoint X="248.6" Y="373.4" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="248.6" Y="373.4" />
                      <Point X="248.6" Y="373.4" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="248.6" Y="373.4" />
                      <Point X="248.6" Y="373.4" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Alternate" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FFFFAC80" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="20">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="False">
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="308.4895" Y="339.44662" />
                      <ControlPoint1 X="300.60092" Y="347.3352" />
                      <ControlPoint2 X="313.1376" Y="372.6618" />
                      <EndPoint X="336.49097" Y="396.0152" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="336.49097" Y="396.0152" />
                      <Point X="336.49097" Y="396.0152" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="336.49097" Y="396.0152" />
                      <ControlPoint1 X="359.8443" Y="419.36853" />
                      <ControlPoint2 X="385.1709" Y="431.9052" />
                      <EndPoint X="393.05948" Y="424.0166" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="393.05948" Y="424.0166" />
                      <Point X="393.05948" Y="424.0166" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="393.05948" Y="424.0166" />
                      <ControlPoint1 X="400.94806" Y="416.12805" />
                      <ControlPoint2 X="388.4114" Y="390.8014" />
                      <EndPoint X="365.05807" Y="367.44806" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="365.05807" Y="367.44806" />
                      <Point X="365.05807" Y="367.44806" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="365.05807" Y="367.44806" />
                      <ControlPoint1 X="341.7047" Y="344.09473" />
                      <ControlPoint2 X="316.37808" Y="331.55804" />
                      <EndPoint X="308.4895" Y="339.44662" />
                    </Bezier>
                  </PathFigure>
                </Path>
                <Path FillMode="Winding" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544C" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="386.19998" Y="426.2" />
                      <ControlPoint1 X="375" Y="426.2" />
                      <ControlPoint2 X="355" Y="414.4" />
                      <EndPoint X="336.4" Y="395.80002" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="336.4" Y="395.80002" />
                      <Point X="336.4" Y="395.80002" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="336.4" Y="395.80002" />
                      <ControlPoint1 X="313" Y="372.40002" />
                      <ControlPoint2 X="300.6" Y="347.2" />
                      <EndPoint X="308.4" Y="339.2" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="308.4" Y="339.2" />
                      <Point X="308.4" Y="339.2" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="308.4" Y="339.2" />
                      <ControlPoint1 X="310" Y="337.6" />
                      <ControlPoint2 X="312.39996" Y="336.8" />
                      <EndPoint X="315.19998" Y="336.8" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="315.19998" Y="336.8" />
                      <Point X="315.19998" Y="336.8" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="315.19998" Y="336.8" />
                      <ControlPoint1 X="326.4" Y="336.8" />
                      <ControlPoint2 X="346.4" Y="348.6" />
                      <EndPoint X="365" Y="367.2" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="365" Y="367.2" />
                      <Point X="365" Y="367.2" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="365" Y="367.2" />
                      <ControlPoint1 X="388.4" Y="390.6" />
                      <ControlPoint2 X="400.8" Y="415.8" />
                      <EndPoint X="393" Y="423.8" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="393" Y="423.8" />
                      <Point X="393" Y="423.8" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="393" Y="423.8" />
                      <ControlPoint1 X="391.4" Y="425.4" />
                      <ControlPoint2 X="389" Y="426.2" />
                      <EndPoint X="386.19998" Y="426.2" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="386.19998" Y="426.2" />
                      <Point X="386.19998" Y="426.2" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="386.19998" Y="426.2" />
                      <Point X="386.19998" Y="426.2" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Alternate" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FFFFAC80" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="20">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="False">
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="134.17253" Y="367.32965" />
                      <ControlPoint1 X="110.81917" Y="390.68298" />
                      <ControlPoint2 X="98.28252" Y="416.00958" />
                      <EndPoint X="106.1711" Y="423.8982" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="106.1711" Y="423.8982" />
                      <Point X="106.1711" Y="423.8982" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="106.1711" Y="423.8982" />
                      <ControlPoint1 X="114.05968" Y="431.78677" />
                      <ControlPoint2 X="139.38629" Y="419.25012" />
                      <EndPoint X="162.73964" Y="395.89676" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="162.73964" Y="395.89676" />
                      <Point X="162.73964" Y="395.89676" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="162.73964" Y="395.89676" />
                      <ControlPoint1 X="186.093" Y="372.5434" />
                      <ControlPoint2 X="198.62965" Y="347.2168" />
                      <EndPoint X="190.74107" Y="339.32822" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="190.74107" Y="339.32822" />
                      <Point X="190.74107" Y="339.32822" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="190.74107" Y="339.32822" />
                      <ControlPoint1 X="182.8525" Y="331.43964" />
                      <ControlPoint2 X="157.5259" Y="343.9763" />
                      <EndPoint X="134.17253" Y="367.32965" />
                    </Bezier>
                  </PathFigure>
                </Path>
                <Path FillMode="Winding" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544C" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="113" Y="426.2" />
                      <ControlPoint1 X="110.200005" Y="426.2" />
                      <ControlPoint2 X="107.799995" Y="425.4" />
                      <EndPoint X="106.2" Y="423.8" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="106.2" Y="423.8" />
                      <Point X="106.2" Y="423.8" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="106.2" Y="423.8" />
                      <ControlPoint1 X="98.4" Y="416" />
                      <ControlPoint2 X="110.8" Y="390.6" />
                      <EndPoint X="134.2" Y="367.2" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="134.2" Y="367.2" />
                      <Point X="134.2" Y="367.2" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="134.2" Y="367.2" />
                      <ControlPoint1 X="152.8" Y="348.6" />
                      <ControlPoint2 X="172.6" Y="336.80002" />
                      <EndPoint X="184.00002" Y="336.80002" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="184.00002" Y="336.80002" />
                      <Point X="184.00002" Y="336.80002" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="184.00002" Y="336.80002" />
                      <ControlPoint1 X="186.80002" Y="336.80002" />
                      <ControlPoint2 X="189.20001" Y="337.60004" />
                      <EndPoint X="190.80002" Y="339.2" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="190.80002" Y="339.2" />
                      <Point X="190.80002" Y="339.2" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="190.80002" Y="339.2" />
                      <ControlPoint1 X="198.60002" Y="347.00003" />
                      <ControlPoint2 X="186.20001" Y="372.40002" />
                      <EndPoint X="162.8" Y="395.80002" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="162.8" Y="395.80002" />
                      <Point X="162.8" Y="395.80002" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="162.8" Y="395.80002" />
                      <ControlPoint1 X="144.2" Y="414.40002" />
                      <ControlPoint2 X="124.40001" Y="426.2" />
                      <EndPoint X="113" Y="426.2" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="113" Y="426.2" />
                      <Point X="113" Y="426.2" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="113" Y="426.2" />
                      <Point X="113" Y="426.2" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Alternate" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FFFFC4E8" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="19.999998">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="False">
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="294.41507" Y="391.92776" />
                      <ControlPoint1 X="286.65936" Y="395.1403" />
                      <ControlPoint2 X="288.04785" Y="416.27542" />
                      <EndPoint X="297.5163" Y="439.13437" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="297.5163" Y="439.13437" />
                      <Point X="297.5163" Y="439.13437" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="297.5163" Y="439.13437" />
                      <ControlPoint1 X="306.9848" Y="461.99332" />
                      <ControlPoint2 X="320.94778" Y="477.9199" />
                      <EndPoint X="328.7035" Y="474.70737" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="328.7035" Y="474.70737" />
                      <Point X="328.7035" Y="474.70737" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="328.7035" Y="474.70737" />
                      <ControlPoint1 X="336.45923" Y="471.49484" />
                      <ControlPoint2 X="335.07074" Y="450.35974" />
                      <EndPoint X="325.60223" Y="427.5008" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="325.60223" Y="427.5008" />
                      <Point X="325.60223" Y="427.5008" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="325.60223" Y="427.5008" />
                      <ControlPoint1 X="316.13376" Y="404.64185" />
                      <ControlPoint2 X="302.17078" Y="388.71524" />
                      <EndPoint X="294.41507" Y="391.92776" />
                    </Bezier>
                  </PathFigure>
                </Path>
                <Path FillMode="Winding" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544C" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="326.59998" Y="475" />
                      <ControlPoint1 X="318.59998" Y="475" />
                      <ControlPoint2 X="306.19998" Y="459.8" />
                      <EndPoint X="297.59998" Y="439" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="297.59998" Y="439" />
                      <Point X="297.59998" Y="439" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="297.59998" Y="439" />
                      <ControlPoint1 X="288.19998" Y="416.2" />
                      <ControlPoint2 X="286.59998" Y="395" />
                      <EndPoint X="294.4" Y="391.8" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="294.4" Y="391.8" />
                      <Point X="294.4" Y="391.8" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="294.4" Y="391.8" />
                      <ControlPoint1 X="295" Y="391.6" />
                      <ControlPoint2 X="295.8" Y="391.40002" />
                      <EndPoint X="296.6" Y="391.40002" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="296.6" Y="391.40002" />
                      <Point X="296.6" Y="391.40002" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="296.6" Y="391.40002" />
                      <ControlPoint1 X="304.6" Y="391.40002" />
                      <ControlPoint2 X="317" Y="406.6" />
                      <EndPoint X="325.6" Y="427.40002" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="325.6" Y="427.40002" />
                      <Point X="325.6" Y="427.40002" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="325.6" Y="427.40002" />
                      <ControlPoint1 X="335.00003" Y="450.2" />
                      <ControlPoint2 X="336.60004" Y="471.4" />
                      <EndPoint X="328.80002" Y="474.6" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="328.80002" Y="474.6" />
                      <Point X="328.80002" Y="474.6" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="328.80002" Y="474.6" />
                      <ControlPoint1 X="328.2" Y="474.8" />
                      <ControlPoint2 X="327.40002" Y="475" />
                      <EndPoint X="326.6" Y="475" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="326.6" Y="475" />
                      <Point X="326.6" Y="475" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="326.6" Y="475" />
                      <Point X="326.6" Y="475" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Alternate" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FFFFC4E8" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="19.999998">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="False">
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="172.51619" Y="427.2768" />
                      <ControlPoint1 X="163.0477" Y="450.13574" />
                      <ControlPoint2 X="161.65924" Y="471.27087" />
                      <EndPoint X="169.41495" Y="474.48337" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="169.41495" Y="474.48337" />
                      <Point X="169.41495" Y="474.48337" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="169.41495" Y="474.48337" />
                      <ControlPoint1 X="177.17065" Y="477.6959" />
                      <ControlPoint2 X="191.13364" Y="461.76932" />
                      <EndPoint X="200.60213" Y="438.91037" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="200.60213" Y="438.91037" />
                      <Point X="200.60213" Y="438.91037" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="200.60213" Y="438.91037" />
                      <ControlPoint1 X="210.07062" Y="416.05142" />
                      <ControlPoint2 X="211.45909" Y="394.91632" />
                      <EndPoint X="203.70338" Y="391.7038" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="203.70338" Y="391.7038" />
                      <Point X="203.70338" Y="391.7038" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="203.70338" Y="391.7038" />
                      <ControlPoint1 X="195.94768" Y="388.49127" />
                      <ControlPoint2 X="181.98468" Y="404.41785" />
                      <EndPoint X="172.51619" Y="427.2768" />
                    </Bezier>
                  </PathFigure>
                </Path>
                <Path FillMode="Winding" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544C" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="171.59999" Y="475" />
                      <ControlPoint1 X="171.59999" Y="475" />
                      <ControlPoint2 X="170.2" Y="475" />
                      <EndPoint X="169.4" Y="474.6" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="169.4" Y="474.6" />
                      <Point X="169.4" Y="474.6" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="169.4" Y="474.6" />
                      <ControlPoint1 X="161.59999" Y="471.4" />
                      <ControlPoint2 X="163.2" Y="450.2" />
                      <EndPoint X="172.59999" Y="427.40002" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="172.59999" Y="427.40002" />
                      <Point X="172.59999" Y="427.40002" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="172.59999" Y="427.40002" />
                      <ControlPoint1 X="181.2" Y="406.40002" />
                      <ControlPoint2 X="193.59999" Y="391.40002" />
                      <EndPoint X="201.59999" Y="391.40002" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="201.59999" Y="391.40002" />
                      <Point X="201.59999" Y="391.40002" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="201.59999" Y="391.40002" />
                      <ControlPoint1 X="202.4" Y="391.40002" />
                      <ControlPoint2 X="202.99998" Y="391.40002" />
                      <EndPoint X="203.79999" Y="391.8" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="203.79999" Y="391.8" />
                      <Point X="203.79999" Y="391.8" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="203.79999" Y="391.8" />
                      <ControlPoint1 X="211.59999" Y="395" />
                      <ControlPoint2 X="210" Y="416.2" />
                      <EndPoint X="200.59999" Y="439" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="200.59999" Y="439" />
                      <Point X="200.59999" Y="439" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="200.59999" Y="439" />
                      <ControlPoint1 X="191.99998" Y="460" />
                      <ControlPoint2 X="179.6" Y="475" />
                      <EndPoint X="171.59999" Y="475" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="171.59999" Y="475" />
                      <Point X="171.59999" Y="475" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="171.59999" Y="475" />
                      <Point X="171.59999" Y="475" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Winding" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FFFFC4E8" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="255.79999" Y="109.600006" />
                      <ControlPoint1 X="252.19998" Y="115.79999" />
                      <ControlPoint2 X="243.39998" Y="115.79999" />
                      <EndPoint X="239.79997" Y="109.600006" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="239.79997" Y="109.600006" />
                      <Point X="233.39998" Y="98.599976" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="233.39998" Y="98.599976" />
                      <Point X="218.99998" Y="73.79999" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="218.99998" Y="73.79999" />
                      <Point X="218.99998" Y="73.79999" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="218.99998" Y="73.79999" />
                      <Point X="276.19998" Y="73.79999" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="276.19998" Y="73.79999" />
                      <Point X="261.8" Y="98.599976" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="261.8" Y="98.599976" />
                      <Point X="255.40001" Y="109.600006" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Winding" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544C" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="247.8" Y="114.19998" />
                      <ControlPoint1 X="244.8" Y="114.19998" />
                      <ControlPoint2 X="241.6" Y="112.599976" />
                      <EndPoint X="239.8" Y="109.600006" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="239.8" Y="109.600006" />
                      <Point X="233.40001" Y="98.599976" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="233.40001" Y="98.599976" />
                      <Point X="219.00002" Y="73.79999" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="219.00002" Y="73.79999" />
                      <Point X="219.00002" Y="73.79999" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="219.00002" Y="73.79999" />
                      <Point X="276.19998" Y="73.79999" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="276.19998" Y="73.79999" />
                      <Point X="261.8" Y="98.599976" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="261.8" Y="98.599976" />
                      <Point X="255.40001" Y="109.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="255.40001" Y="109.600006" />
                      <Point X="255.40001" Y="109.600006" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="255.40001" Y="109.600006" />
                      <ControlPoint1 X="253.6" Y="112.600006" />
                      <ControlPoint2 X="250.59999" Y="114.19998" />
                      <EndPoint X="247.4" Y="114.19998" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="247.4" Y="114.19998" />
                      <Point X="247.4" Y="114.19998" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="247.4" Y="114.19998" />
                      <Point X="247.4" Y="114.19998" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Alternate" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FFFFF5B5" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <PolyLine LineColor="#FF000000">
                      <Point X="190.59999" Y="123.400024" />
                      <Point X="190.59999" Y="123.400024" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="190.59999" Y="123.400024" />
                      <Point X="176.2" Y="98.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="176.2" Y="98.600006" />
                      <Point X="162" Y="73.80002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="162" Y="73.80002" />
                      <Point X="190.59999" Y="73.80002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="190.59999" Y="73.80002" />
                      <Point X="219.2" Y="73.80002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="219.2" Y="73.80002" />
                      <Point X="204.79999" Y="98.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="204.79999" Y="98.600006" />
                      <Point X="190.59999" Y="123.400024" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="190.59999" Y="123.400024" />
                      <Point X="190.59999" Y="123.400024" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Alternate" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544C" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <PolyLine LineColor="#FF000000">
                      <Point X="190.59999" Y="123.400024" />
                      <Point X="190.59999" Y="123.400024" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="190.59999" Y="123.400024" />
                      <Point X="176.2" Y="98.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="176.2" Y="98.600006" />
                      <Point X="162" Y="73.80002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="162" Y="73.80002" />
                      <Point X="190.59999" Y="73.80002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="190.59999" Y="73.80002" />
                      <Point X="219.2" Y="73.80002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="219.2" Y="73.80002" />
                      <Point X="204.79999" Y="98.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="204.79999" Y="98.600006" />
                      <Point X="190.59999" Y="123.400024" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="190.59999" Y="123.400024" />
                      <Point X="190.59999" Y="123.400024" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="190.59999" Y="123.400024" />
                      <Point X="190.59999" Y="123.400024" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Alternate" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FFFFF5B5" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <PolyLine LineColor="#FF000000">
                      <Point X="162" Y="173.20001" />
                      <Point X="162" Y="173.20001" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="162" Y="173.20001" />
                      <Point X="147.59999" Y="148.40002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="147.59999" Y="148.40002" />
                      <Point X="133.4" Y="123.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="133.4" Y="123.600006" />
                      <Point X="162" Y="123.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="162" Y="123.600006" />
                      <Point X="190.59999" Y="123.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="190.59999" Y="123.600006" />
                      <Point X="176.2" Y="148.40002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="176.2" Y="148.40002" />
                      <Point X="162" Y="173.20001" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="162" Y="173.20001" />
                      <Point X="162" Y="173.20001" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Alternate" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544C" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <PolyLine LineColor="#FF000000">
                      <Point X="162" Y="173.20001" />
                      <Point X="162" Y="173.20001" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="162" Y="173.20001" />
                      <Point X="147.59999" Y="148.40002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="147.59999" Y="148.40002" />
                      <Point X="133.4" Y="123.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="133.4" Y="123.600006" />
                      <Point X="162" Y="123.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="162" Y="123.600006" />
                      <Point X="190.59999" Y="123.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="190.59999" Y="123.600006" />
                      <Point X="176.2" Y="148.40002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="176.2" Y="148.40002" />
                      <Point X="162" Y="173.20001" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="162" Y="173.20001" />
                      <Point X="162" Y="173.20001" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="162" Y="173.20001" />
                      <Point X="162" Y="173.20001" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Alternate" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FFFFF5B5" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <PolyLine LineColor="#FF000000">
                      <Point X="333.6" Y="173.20001" />
                      <Point X="333.6" Y="173.20001" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="333.6" Y="173.20001" />
                      <Point X="319.4" Y="148.40002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="319.4" Y="148.40002" />
                      <Point X="305" Y="123.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="305" Y="123.600006" />
                      <Point X="333.6" Y="123.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="333.6" Y="123.600006" />
                      <Point X="362.2" Y="123.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="362.2" Y="123.600006" />
                      <Point X="347.99997" Y="148.40002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="347.99997" Y="148.40002" />
                      <Point X="333.6" Y="173.20001" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="333.6" Y="173.20001" />
                      <Point X="333.6" Y="173.20001" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Alternate" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544C" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <PolyLine LineColor="#FF000000">
                      <Point X="333.6" Y="173.20001" />
                      <Point X="333.6" Y="173.20001" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="333.6" Y="173.20001" />
                      <Point X="319.4" Y="148.40002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="319.4" Y="148.40002" />
                      <Point X="305" Y="123.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="305" Y="123.600006" />
                      <Point X="333.6" Y="123.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="333.6" Y="123.600006" />
                      <Point X="362.2" Y="123.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="362.2" Y="123.600006" />
                      <Point X="347.99997" Y="148.40002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="347.99997" Y="148.40002" />
                      <Point X="333.6" Y="173.20001" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="333.6" Y="173.20001" />
                      <Point X="333.6" Y="173.20001" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="333.6" Y="173.20001" />
                      <Point X="333.6" Y="173.20001" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Alternate" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FFFFF5B5" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <PolyLine LineColor="#FF000000">
                      <Point X="305" Y="123.400024" />
                      <Point X="305" Y="123.400024" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="305" Y="123.400024" />
                      <Point X="290.8" Y="98.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="290.8" Y="98.600006" />
                      <Point X="276.4" Y="73.80002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="276.4" Y="73.80002" />
                      <Point X="305" Y="73.80002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="305" Y="73.80002" />
                      <Point X="333.6" Y="73.80002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="333.6" Y="73.80002" />
                      <Point X="319.4" Y="98.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="319.4" Y="98.600006" />
                      <Point X="305" Y="123.400024" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="305" Y="123.400024" />
                      <Point X="305" Y="123.400024" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Alternate" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544C" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <PolyLine LineColor="#FF000000">
                      <Point X="305" Y="123.400024" />
                      <Point X="305" Y="123.400024" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="305" Y="123.400024" />
                      <Point X="290.8" Y="98.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="290.8" Y="98.600006" />
                      <Point X="276.4" Y="73.80002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="276.4" Y="73.80002" />
                      <Point X="305" Y="73.80002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="305" Y="73.80002" />
                      <Point X="333.6" Y="73.80002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="333.6" Y="73.80002" />
                      <Point X="319.4" Y="98.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="319.4" Y="98.600006" />
                      <Point X="305" Y="123.400024" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="305" Y="123.400024" />
                      <Point X="305" Y="123.400024" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="305" Y="123.400024" />
                      <Point X="305" Y="123.400024" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Alternate" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FFFFAC80" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <PolyLine LineColor="#FF000000">
                      <Point X="247.8" Y="12.0000305" />
                      <Point X="247.8" Y="12.0000305" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="247.8" Y="12.0000305" />
                      <Point X="233.40001" Y="36.80005" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="233.40001" Y="36.80005" />
                      <Point X="219.2" Y="61.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="219.2" Y="61.600006" />
                      <Point X="247.8" Y="61.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="247.8" Y="61.600006" />
                      <Point X="276.4" Y="61.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="276.4" Y="61.600006" />
                      <Point X="262.19998" Y="36.80005" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="262.19998" Y="36.80005" />
                      <Point X="247.8" Y="12.0000305" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="247.8" Y="12.0000305" />
                      <Point X="247.8" Y="12.0000305" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Alternate" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544C" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <PolyLine LineColor="#FF000000">
                      <Point X="276.4" Y="61.600006" />
                      <Point X="276.4" Y="61.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="276.4" Y="61.600006" />
                      <Point X="247.8" Y="61.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="247.8" Y="61.600006" />
                      <Point X="219.2" Y="61.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="219.2" Y="61.600006" />
                      <Point X="233.40001" Y="36.80005" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="233.40001" Y="36.80005" />
                      <Point X="247.8" Y="12.0000305" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="247.8" Y="12.0000305" />
                      <Point X="262.19998" Y="36.80005" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="262.19998" Y="36.80005" />
                      <Point X="276.4" Y="61.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="276.4" Y="61.600006" />
                      <Point X="276.4" Y="61.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="276.4" Y="61.600006" />
                      <Point X="276.4" Y="61.600006" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Winding" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544B" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <PolyLine LineColor="#FF000000">
                      <Point X="334.59998" Y="268.40002" />
                      <Point X="334.59998" Y="268.40002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="334.59998" Y="268.40002" />
                      <Point X="341.4" Y="276.8" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="341.4" Y="276.8" />
                      <Point X="341.4" Y="276.8" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="341.4" Y="276.8" />
                      <ControlPoint1 X="341.4" Y="276.8" />
                      <ControlPoint2 X="332" Y="284.40002" />
                      <EndPoint X="318.8" Y="288" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="318.8" Y="288" />
                      <Point X="318.8" Y="288" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="318.8" Y="288" />
                      <ControlPoint1 X="301" Y="293" />
                      <ControlPoint2 X="284.4" Y="289" />
                      <EndPoint X="270.8" Y="276.60004" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="270.8" Y="276.60004" />
                      <Point X="278" Y="268.80005" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="278" Y="268.80005" />
                      <ControlPoint1 X="288.8" Y="278.80005" />
                      <ControlPoint2 X="301.4" Y="281.80005" />
                      <EndPoint X="315.6" Y="278.00003" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="315.6" Y="278.00003" />
                      <Point X="315.6" Y="278.00003" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="315.6" Y="278.00003" />
                      <ControlPoint1 X="326.6" Y="275.00003" />
                      <ControlPoint2 X="334.59998" Y="268.60004" />
                      <EndPoint X="334.59998" Y="268.60004" />
                    </Bezier>
                  </PathFigure>
                </Path>
                <Path FillMode="Winding" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544B" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <PolyLine LineColor="#FF000000">
                      <Point X="217.59999" Y="268.8" />
                      <Point X="217.59999" Y="268.8" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="217.59999" Y="268.8" />
                      <Point X="224.8" Y="276.59998" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="224.8" Y="276.59998" />
                      <Point X="224.8" Y="276.59998" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="224.8" Y="276.59998" />
                      <ControlPoint1 X="211.2" Y="289" />
                      <ControlPoint2 X="194.40001" Y="293.19998" />
                      <EndPoint X="176" Y="288.59998" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="176" Y="288.59998" />
                      <Point X="176" Y="288.59998" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="176" Y="288.59998" />
                      <ControlPoint1 X="162.6" Y="285.2" />
                      <ControlPoint2 X="153" Y="278.19998" />
                      <EndPoint X="152.6" Y="277.8" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="152.6" Y="277.8" />
                      <Point X="159" Y="269.19998" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="159" Y="269.19998" />
                      <Point X="155.8" Y="273.4" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="155.8" Y="273.4" />
                      <Point X="159" Y="269.19998" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="159" Y="269.19998" />
                      <Point X="159" Y="269.19998" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="159" Y="269.19998" />
                      <ControlPoint1 X="159" Y="269.19998" />
                      <ControlPoint2 X="167.4" Y="275.4" />
                      <EndPoint X="179" Y="278.19998" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="179" Y="278.19998" />
                      <Point X="179" Y="278.19998" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="179" Y="278.19998" />
                      <ControlPoint1 X="193.79999" Y="281.8" />
                      <ControlPoint2 X="206.59999" Y="278.59998" />
                      <EndPoint X="217.4" Y="268.59998" />
                    </Bezier>
                  </PathFigure>
                </Path>
              </Canvas>
            </Canvas>
          </Page>
        </Group>
      </Aps>`,
      logo: `<?xml version="1.0" encoding="utf-8" standalone="yes"?>
      <Aps>
        <Group>
          <Page Width="500" Height="500" PaperTray="0">
            <Canvas>
              <Canvas>
                <Clip>
                  <Path FillMode="Winding">
                    <PathFigure IsClosed="True">
                      <PolyLine LineColor="#FF000000">
                        <Point X="0" Y="500" />
                        <Point X="0" Y="0" />
                      </PolyLine>
                      <PolyLine LineColor="#FF000000">
                        <Point X="0" Y="0" />
                        <Point X="500" Y="0" />
                      </PolyLine>
                      <PolyLine LineColor="#FF000000">
                        <Point X="500" Y="0" />
                        <Point X="500" Y="500" />
                      </PolyLine>
                      <PolyLine LineColor="#FF000000">
                        <Point X="500" Y="500" />
                        <Point X="0" Y="500" />
                      </PolyLine>
                    </PathFigure>
                  </Path>
                </Clip>
                <Path FillMode="Winding" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544B" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="20">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <PolyLine LineColor="#FF000000">
                      <Point X="81" Y="267.00003" />
                      <Point X="81" Y="267.00003" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="81" Y="267.00003" />
                      <Point X="156.4" Y="267.00003" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="156.4" Y="267.00003" />
                      <Point X="156.4" Y="256.2" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="156.4" Y="256.2" />
                      <Point X="81" Y="256.2" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Winding" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544B" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="20">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <PolyLine LineColor="#FF000000">
                      <Point X="339.59998" Y="266.59998" />
                      <Point X="339.59998" Y="266.59998" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="339.59998" Y="266.59998" />
                      <Point X="415" Y="266.59998" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="415" Y="266.59998" />
                      <Point X="415" Y="255.8" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="415" Y="255.8" />
                      <Point X="339.59998" Y="255.8" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Winding" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544B" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="19.999998">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <PolyLine LineColor="#FF000000">
                      <Point X="81.946304" Y="336.25958" />
                      <Point X="81.946304" Y="336.25958" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="81.946304" Y="336.25958" />
                      <Point X="86.07927" Y="346.2375" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="86.07927" Y="346.2375" />
                      <Point X="159.80487" Y="315.69937" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="159.80487" Y="315.69937" />
                      <Point X="155.67189" Y="305.72147" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Winding" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544B" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="19.999998">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <PolyLine LineColor="#FF000000">
                      <Point X="335.9118" Y="315.37158" />
                      <Point X="335.9118" Y="315.37158" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="335.9118" Y="315.37158" />
                      <Point X="410.1917" Y="346.13934" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="410.1917" Y="346.13934" />
                      <Point X="414.3247" Y="336.16144" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="414.3247" Y="336.16144" />
                      <Point X="340.0448" Y="305.39368" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Winding" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544B" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="19.999998">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <PolyLine LineColor="#FF000000">
                      <Point X="90.8285" Y="191.77525" />
                      <Point X="90.8285" Y="191.77525" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="90.8285" Y="191.77525" />
                      <Point X="160.48898" Y="220.62958" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="160.48898" Y="220.62958" />
                      <Point X="164.62198" Y="210.6517" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="164.62198" Y="210.6517" />
                      <Point X="94.961464" Y="181.79738" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Winding" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544B" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="19.999998">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <PolyLine LineColor="#FF000000">
                      <Point X="331.44662" Y="210.68787" />
                      <Point X="331.44662" Y="210.68787" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="331.44662" Y="210.68787" />
                      <Point X="335.57962" Y="220.66577" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="335.57962" Y="220.66577" />
                      <Point X="405.24008" Y="191.81143" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="405.24008" Y="191.81143" />
                      <Point X="401.1071" Y="181.83353" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Winding" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544B" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <PolyLine LineColor="#FF000000">
                      <Point X="247.8" Y="122.20001" />
                      <Point X="247.8" Y="122.20001" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="247.8" Y="122.20001" />
                      <Point X="247.8" Y="122.20001" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="247.8" Y="122.20001" />
                      <Point X="248.80002" Y="122.20001" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="248.80002" Y="122.20001" />
                      <Point X="248.80002" Y="122.20001" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="248.80002" Y="122.20001" />
                      <ControlPoint1 X="277.40002" Y="127.60004" />
                      <ControlPoint2 X="300.00003" Y="142.40002" />
                      <EndPoint X="316.2" Y="166.00003" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="316.2" Y="166.00003" />
                      <Point X="316.2" Y="166.00003" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="316.2" Y="166.00003" />
                      <ControlPoint1 X="326.80002" Y="181.40002" />
                      <ControlPoint2 X="334.40002" Y="200.80002" />
                      <EndPoint X="339.2" Y="223.6" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="339.2" Y="223.6" />
                      <Point X="339.2" Y="223.6" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="339.2" Y="223.6" />
                      <ControlPoint1 X="343.00003" Y="241.6" />
                      <ControlPoint2 X="344.80002" Y="261.8" />
                      <EndPoint X="345.00003" Y="283.6" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="345.00003" Y="283.6" />
                      <Point X="345.00003" Y="283.6" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="345.00003" Y="283.6" />
                      <ControlPoint1 X="345.00003" Y="320.6" />
                      <ControlPoint2 X="339.6" Y="349.2" />
                      <EndPoint X="339.40002" Y="350.40002" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="339.40002" Y="350.40002" />
                      <Point X="328.80002" Y="348.40002" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="328.80002" Y="348.40002" />
                      <ControlPoint1 X="328.80002" Y="348.40002" />
                      <ControlPoint2 X="334.2" Y="319.40002" />
                      <EndPoint X="334.2" Y="283.40002" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="334.2" Y="283.40002" />
                      <Point X="334.2" Y="283.40002" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="334.2" Y="283.40002" />
                      <ControlPoint1 X="334.2" Y="250.40001" />
                      <ControlPoint2 X="329.40002" Y="204.40002" />
                      <EndPoint X="307.20004" Y="172.00003" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="307.20004" Y="172.00003" />
                      <Point X="307.20004" Y="172.00003" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="307.20004" Y="172.00003" />
                      <ControlPoint1 X="293.00003" Y="151.20004" />
                      <ControlPoint2 X="273.00003" Y="138.00003" />
                      <EndPoint X="247.80003" Y="133.20004" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="247.80003" Y="133.20004" />
                      <Point X="247.80003" Y="133.20004" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="247.80003" Y="133.20004" />
                      <ControlPoint1 X="222.60004" Y="138.20004" />
                      <ControlPoint2 X="202.60004" Y="151.20004" />
                      <EndPoint X="188.40004" Y="172.00003" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="188.40004" Y="172.00003" />
                      <Point X="188.40004" Y="172.00003" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="188.40004" Y="172.00003" />
                      <ControlPoint1 X="166.20004" Y="204.40002" />
                      <ControlPoint2 X="161.60004" Y="250.40004" />
                      <EndPoint X="161.40004" Y="283.40002" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="161.40004" Y="283.40002" />
                      <Point X="161.40004" Y="283.40002" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="161.40004" Y="283.40002" />
                      <ControlPoint1 X="161.40004" Y="319.40002" />
                      <ControlPoint2 X="166.80003" Y="348" />
                      <EndPoint X="166.80003" Y="348.40002" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="166.80003" Y="348.40002" />
                      <Point X="156.20004" Y="350.40002" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="156.20004" Y="350.40002" />
                      <ControlPoint1 X="156.00003" Y="349.2" />
                      <ControlPoint2 X="150.60004" Y="320.6" />
                      <EndPoint X="150.60004" Y="283.6" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="150.60004" Y="283.6" />
                      <Point X="150.60004" Y="283.6" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="150.60004" Y="283.6" />
                      <ControlPoint1 X="150.60004" Y="261.8" />
                      <ControlPoint2 X="152.60004" Y="241.6" />
                      <EndPoint X="156.40004" Y="223.6" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="156.40004" Y="223.6" />
                      <Point X="156.40004" Y="223.6" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="156.40004" Y="223.6" />
                      <ControlPoint1 X="161.20004" Y="200.80002" />
                      <ControlPoint2 X="169.00003" Y="181.4" />
                      <EndPoint X="179.40004" Y="166.00003" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="179.40004" Y="166.00003" />
                      <Point X="179.40004" Y="166.00003" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="179.40004" Y="166.00003" />
                      <ControlPoint1 X="195.60005" Y="142.40002" />
                      <ControlPoint2 X="218.20004" Y="127.80002" />
                      <EndPoint X="246.80005" Y="122.400024" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="246.80005" Y="122.400024" />
                      <Point X="246.80005" Y="122.400024" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="246.80005" Y="122.400024" />
                      <Point X="247.80006" Y="122.400024" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Winding" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544B" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <PolyLine LineColor="#FF000000">
                      <Point X="250.19998" Y="234.4" />
                      <Point X="250.19998" Y="234.4" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="250.19998" Y="234.4" />
                      <Point X="250.19998" Y="234.4" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="250.19998" Y="234.4" />
                      <Point X="260.99997" Y="234.4" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="260.99997" Y="234.4" />
                      <Point X="260.99997" Y="234.4" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="260.99997" Y="234.4" />
                      <Point X="260.99997" Y="289" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="260.99997" Y="289" />
                      <Point X="260.99997" Y="289" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="260.99997" Y="289" />
                      <ControlPoint1 X="268.59998" Y="305.2" />
                      <ControlPoint2 X="278.59998" Y="314.6" />
                      <EndPoint X="290.39996" Y="317.2" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="290.39996" Y="317.2" />
                      <Point X="290.39996" Y="317.2" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="290.39996" Y="317.2" />
                      <ControlPoint1 X="312" Y="322" />
                      <ControlPoint2 X="334.19998" Y="303.2" />
                      <EndPoint X="334.39996" Y="303" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="334.39996" Y="303" />
                      <Point X="341.39996" Y="311.2" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="341.39996" Y="311.2" />
                      <ControlPoint1 X="340.39996" Y="312.2" />
                      <ControlPoint2 X="314.99997" Y="333.6" />
                      <EndPoint X="288.19995" Y="327.6" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="288.19995" Y="327.6" />
                      <Point X="288.19995" Y="327.6" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="288.19995" Y="327.6" />
                      <ControlPoint1 X="272.59998" Y="324.2" />
                      <ControlPoint2 X="259.99997" Y="312.2" />
                      <EndPoint X="250.79996" Y="292.2" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="250.79996" Y="292.2" />
                      <Point X="250.39995" Y="291.2" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="250.39995" Y="291.2" />
                      <Point X="250.39995" Y="291.2" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="250.39995" Y="291.2" />
                      <Point X="250.39995" Y="234.4" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Winding" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544B" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="248.2" Y="199.4" />
                      <ControlPoint1 X="249.59999" Y="199.4" />
                      <ControlPoint2 X="250.99998" Y="200" />
                      <EndPoint X="251.99998" Y="201.00003" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="251.99998" Y="201.00003" />
                      <Point X="261.59998" Y="210.6" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="261.59998" Y="210.6" />
                      <Point X="261.59998" Y="210.6" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="261.59998" Y="210.6" />
                      <Point X="277.19998" Y="210.6" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="277.19998" Y="210.6" />
                      <Point X="277.19998" Y="210.6" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="277.19998" Y="210.6" />
                      <Point X="277.19998" Y="221.4" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="277.19998" Y="221.4" />
                      <Point X="277.19998" Y="221.4" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="277.19998" Y="221.4" />
                      <Point X="259.19998" Y="221.4" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="259.19998" Y="221.4" />
                      <Point X="259.19998" Y="221.4" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="259.19998" Y="221.4" />
                      <ControlPoint1 X="257.8" Y="221.4" />
                      <ControlPoint2 X="256.4" Y="220.79999" />
                      <EndPoint X="255.39998" Y="219.79999" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="255.39998" Y="219.79999" />
                      <Point X="247.99997" Y="212.4" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="247.99997" Y="212.4" />
                      <Point X="240.99998" Y="219.4" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="240.99998" Y="219.4" />
                      <Point X="240.99998" Y="219.4" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="240.99998" Y="219.4" />
                      <ControlPoint1 X="239.99997" Y="220.4" />
                      <ControlPoint2 X="238.59998" Y="221" />
                      <EndPoint X="237.19998" Y="221" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="237.19998" Y="221" />
                      <Point X="237.19998" Y="221" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="237.19998" Y="221" />
                      <Point X="219.79997" Y="221" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="219.79997" Y="221" />
                      <Point X="219.79997" Y="221" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="219.79997" Y="221" />
                      <Point X="219.79997" Y="210.20001" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="219.79997" Y="210.20001" />
                      <Point X="219.79997" Y="210.20001" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="219.79997" Y="210.20001" />
                      <Point X="234.79997" Y="210.20001" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="234.79997" Y="210.20001" />
                      <Point X="243.99998" Y="201" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="243.99998" Y="201" />
                      <Point X="243.99998" Y="201" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="243.99998" Y="201" />
                      <ControlPoint1 X="245" Y="199.99997" />
                      <ControlPoint2 X="246.4" Y="199.4" />
                      <EndPoint X="247.79999" Y="199.4" />
                    </Bezier>
                  </PathFigure>
                </Path>
                <Path FillMode="Winding" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FFFFAC80" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="263.8" Y="175.60004" />
                      <ControlPoint1 X="258" Y="178.60004" />
                      <ControlPoint2 X="255" Y="179.20004" />
                      <EndPoint X="253.99998" Y="179.20004" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="253.99998" Y="179.20004" />
                      <Point X="253.99998" Y="179.20004" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="253.99998" Y="179.20004" />
                      <ControlPoint1 X="253.99998" Y="179.00006" />
                      <ControlPoint2 X="253.99998" Y="178.60004" />
                      <EndPoint X="253.99998" Y="178.00003" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="253.99998" Y="178.00003" />
                      <Point X="253.99998" Y="178.00003" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="253.99998" Y="178.00003" />
                      <Point X="243.39998" Y="178.00003" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="243.39998" Y="178.00003" />
                      <Point X="243.39998" Y="178.00003" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="243.39998" Y="178.00003" />
                      <ControlPoint1 X="243.39998" Y="178.00003" />
                      <ControlPoint2 X="243.39998" Y="178.80002" />
                      <EndPoint X="243.39998" Y="179.00006" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="243.39998" Y="179.00006" />
                      <Point X="243.39998" Y="179.00006" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="243.39998" Y="179.00006" />
                      <ControlPoint1 X="242.19998" Y="179.00006" />
                      <ControlPoint2 X="239.19998" Y="178.40005" />
                      <EndPoint X="233.39998" Y="175.40005" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="233.39998" Y="175.40005" />
                      <Point X="233.39998" Y="175.40005" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="233.39998" Y="175.40005" />
                      <ControlPoint1 X="232.39998" Y="174.80005" />
                      <ControlPoint2 X="231.4" Y="174.40002" />
                      <EndPoint X="230.59999" Y="173.80002" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="230.59999" Y="173.80002" />
                      <Point X="230.59999" Y="173.80002" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="230.59999" Y="173.80002" />
                      <ControlPoint1 X="236.4" Y="169.40002" />
                      <ControlPoint2 X="242.59999" Y="167.20001" />
                      <EndPoint X="248.79999" Y="167.20001" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="248.79999" Y="167.20001" />
                      <Point X="248.79999" Y="167.20001" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="248.79999" Y="167.20001" />
                      <ControlPoint1 X="256.4" Y="167.20001" />
                      <ControlPoint2 X="262.8" Y="170.80002" />
                      <EndPoint X="267" Y="173.80002" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="267" Y="173.80002" />
                      <Point X="267" Y="173.80002" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="267" Y="173.80002" />
                      <ControlPoint1 X="266.19998" Y="174.40002" />
                      <ControlPoint2 X="265.19998" Y="174.80005" />
                      <EndPoint X="264.2" Y="175.40005" />
                    </Bezier>
                  </PathFigure>
                  <PathFigure IsClosed="True">
                    <PolyLine LineColor="#FF000000">
                      <Point X="217.59999" Y="170.80002" />
                      <Point X="217.59999" Y="170.80002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="217.59999" Y="170.80002" />
                      <Point X="213.2" Y="175.20001" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="213.2" Y="175.20001" />
                      <Point X="218.39998" Y="178.80002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="218.39998" Y="178.80002" />
                      <Point X="218.39998" Y="178.80002" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="218.39998" Y="178.80002" />
                      <ControlPoint1 X="218.39998" Y="178.80002" />
                      <ControlPoint2 X="223.2" Y="182.20001" />
                      <EndPoint X="228.79999" Y="185.00003" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="228.79999" Y="185.00003" />
                      <Point X="228.79999" Y="185.00003" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="228.79999" Y="185.00003" />
                      <ControlPoint1 X="237.59999" Y="189.60004" />
                      <ControlPoint2 X="243.79999" Y="190.60004" />
                      <EndPoint X="248.39998" Y="188.20004" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="248.39998" Y="188.20004" />
                      <Point X="248.39998" Y="188.20004" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="248.39998" Y="188.20004" />
                      <Point X="248.99998" Y="188.20004" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="248.99998" Y="188.20004" />
                      <Point X="248.99998" Y="188.20004" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="248.99998" Y="188.20004" />
                      <ControlPoint1 X="253.59998" Y="190.60004" />
                      <ControlPoint2 X="260" Y="189.40002" />
                      <EndPoint X="268.59998" Y="185.00003" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="268.59998" Y="185.00003" />
                      <Point X="268.59998" Y="185.00003" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="268.59998" Y="185.00003" />
                      <ControlPoint1 X="273.99997" Y="182.00003" />
                      <ControlPoint2 X="278.59998" Y="178.80002" />
                      <EndPoint X="278.79996" Y="178.60004" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="278.79996" Y="178.60004" />
                      <Point X="283.59998" Y="175.00003" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="283.59998" Y="175.00003" />
                      <Point X="279.59998" Y="170.60004" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="279.59998" Y="170.60004" />
                      <Point X="279.59998" Y="170.60004" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="279.59998" Y="170.60004" />
                      <ControlPoint1 X="279.59998" Y="170.60004" />
                      <ControlPoint2 X="266.59998" Y="156.80005" />
                      <EndPoint X="248.99998" Y="156.40002" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="248.99998" Y="156.40002" />
                      <Point X="248.99998" Y="156.40002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="248.99998" Y="156.40002" />
                      <Point X="248.2" Y="156.40002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="248.2" Y="156.40002" />
                      <Point X="248.2" Y="156.40002" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="248.2" Y="156.40002" />
                      <ControlPoint1 X="237.4" Y="156.40002" />
                      <ControlPoint2 X="227.19998" Y="161.20004" />
                      <EndPoint X="217.79999" Y="170.40002" />
                    </Bezier>
                  </PathFigure>
                </Path>
                <Path FillMode="Winding" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544C" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="253.39998" Y="178.20004" />
                      <ControlPoint1 X="253.39998" Y="178.20004" />
                      <ControlPoint2 X="253.39998" Y="179.00003" />
                      <EndPoint X="253.39998" Y="179.40002" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="253.39998" Y="179.40002" />
                      <Point X="253.39998" Y="179.40002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="253.39998" Y="179.40002" />
                      <Point X="253.59998" Y="179.40002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="253.59998" Y="179.40002" />
                      <Point X="253.59998" Y="179.40002" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="253.59998" Y="179.40002" />
                      <ControlPoint1 X="254.79997" Y="179.40002" />
                      <ControlPoint2 X="257.8" Y="178.80002" />
                      <EndPoint X="263.19995" Y="175.80002" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="263.19995" Y="175.80002" />
                      <Point X="263.19995" Y="175.80002" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="263.19995" Y="175.80002" />
                      <ControlPoint1 X="264.19998" Y="175.20001" />
                      <ControlPoint2 X="265.19995" Y="174.80002" />
                      <EndPoint X="265.99994" Y="174.20001" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="265.99994" Y="174.20001" />
                      <Point X="265.99994" Y="174.20001" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="265.99994" Y="174.20001" />
                      <ControlPoint1 X="261.79996" Y="171.20001" />
                      <ControlPoint2 X="255.39995" Y="167.80002" />
                      <EndPoint X="247.79996" Y="167.6" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="247.79996" Y="167.6" />
                      <Point X="247.79996" Y="167.6" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="247.79996" Y="167.6" />
                      <Point X="247.39995" Y="167.6" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="247.39995" Y="167.6" />
                      <Point X="247.39995" Y="167.6" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="247.39995" Y="167.6" />
                      <ControlPoint1 X="241.39993" Y="167.6" />
                      <ControlPoint2 X="235.39995" Y="169.80002" />
                      <EndPoint X="229.79996" Y="174.20001" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="229.79996" Y="174.20001" />
                      <Point X="229.79996" Y="174.20001" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="229.79996" Y="174.20001" />
                      <ControlPoint1 X="230.59995" Y="174.80002" />
                      <ControlPoint2 X="231.59996" Y="175.20001" />
                      <EndPoint X="232.59995" Y="175.80002" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="232.59995" Y="175.80002" />
                      <Point X="232.59995" Y="175.80002" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="232.59995" Y="175.80002" />
                      <ControlPoint1 X="237.99995" Y="178.80002" />
                      <ControlPoint2 X="241.19995" Y="179.40002" />
                      <EndPoint X="242.39995" Y="179.40002" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="242.39995" Y="179.40002" />
                      <Point X="242.39995" Y="179.40002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="242.39995" Y="179.40002" />
                      <Point X="242.39995" Y="179.40002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="242.39995" Y="179.40002" />
                      <Point X="242.39995" Y="179.40002" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="242.39995" Y="179.40002" />
                      <ControlPoint1 X="242.39995" Y="179.40002" />
                      <ControlPoint2 X="242.39995" Y="179.00003" />
                      <EndPoint X="242.39995" Y="178.60004" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="242.39995" Y="178.60004" />
                      <Point X="242.39995" Y="178.60004" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="242.39995" Y="178.60004" />
                      <Point X="252.99995" Y="178.60004" />
                    </PolyLine>
                  </PathFigure>
                  <PathFigure IsClosed="True">
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="253.99998" Y="189.80002" />
                      <ControlPoint1 X="251.99998" Y="189.80002" />
                      <ControlPoint2 X="250.39998" Y="189.4" />
                      <EndPoint X="248.79999" Y="188.6" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="248.79999" Y="188.6" />
                      <Point X="248.79999" Y="188.6" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="248.79999" Y="188.6" />
                      <Point X="248.2" Y="188.6" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="248.2" Y="188.6" />
                      <Point X="248.2" Y="188.6" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="248.2" Y="188.6" />
                      <ControlPoint1 X="246.59998" Y="189.20001" />
                      <ControlPoint2 X="244.8" Y="189.60004" />
                      <EndPoint X="242.79999" Y="189.60004" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="242.79999" Y="189.60004" />
                      <Point X="242.79999" Y="189.60004" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="242.79999" Y="189.60004" />
                      <ControlPoint1 X="238.99998" Y="189.60004" />
                      <ControlPoint2 X="234.19998" Y="188.20004" />
                      <EndPoint X="228.39998" Y="185.00003" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="228.39998" Y="185.00003" />
                      <Point X="228.39998" Y="185.00003" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="228.39998" Y="185.00003" />
                      <ControlPoint1 X="222.79999" Y="182.20004" />
                      <ControlPoint2 X="218.2" Y="178.80002" />
                      <EndPoint X="217.99997" Y="178.80002" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="217.99997" Y="178.80002" />
                      <Point X="212.79997" Y="175.20001" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="212.79997" Y="175.20001" />
                      <Point X="217.19998" Y="170.80002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="217.19998" Y="170.80002" />
                      <Point X="217.19998" Y="170.80002" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="217.19998" Y="170.80002" />
                      <ControlPoint1 X="226.59998" Y="161.40002" />
                      <ControlPoint2 X="236.79997" Y="156.80005" />
                      <EndPoint X="247.59999" Y="156.80005" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="247.59999" Y="156.80005" />
                      <Point X="247.59999" Y="156.80005" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="247.59999" Y="156.80005" />
                      <Point X="248.39998" Y="156.80005" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="248.39998" Y="156.80005" />
                      <Point X="248.39998" Y="156.80005" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="248.39998" Y="156.80005" />
                      <ControlPoint1 X="266.19998" Y="157.20004" />
                      <ControlPoint2 X="278.59998" Y="170.40005" />
                      <EndPoint X="278.99997" Y="171.00003" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="278.99997" Y="171.00003" />
                      <Point X="282.99997" Y="175.40005" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="282.99997" Y="175.40005" />
                      <Point X="278.19995" Y="179.00006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="278.19995" Y="179.00006" />
                      <Point X="278.19995" Y="179.00006" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="278.19995" Y="179.00006" />
                      <ControlPoint1 X="278.19995" Y="179.00006" />
                      <ControlPoint2 X="273.59998" Y="182.40002" />
                      <EndPoint X="267.99997" Y="185.40005" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="267.99997" Y="185.40005" />
                      <Point X="267.99997" Y="185.40005" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="267.99997" Y="185.40005" />
                      <ControlPoint1 X="262.19998" Y="188.40005" />
                      <ControlPoint2 X="257.39996" Y="190.00003" />
                      <EndPoint X="253.59998" Y="190.00003" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="253.59998" Y="190.00003" />
                      <Point X="253.59998" Y="190.00003" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="253.59998" Y="190.00003" />
                      <Point X="253.59998" Y="190.00003" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Winding" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544B" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <PolyLine LineColor="#FF000000">
                      <Point X="223.6" Y="294.59998" />
                      <Point X="223.6" Y="294.59998" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="223.6" Y="294.59998" />
                      <Point X="233" Y="299.8" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="233" Y="299.8" />
                      <Point X="233" Y="299.8" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="233" Y="299.8" />
                      <ControlPoint1 X="223.40001" Y="317.2" />
                      <ControlPoint2 X="211.40001" Y="327.2" />
                      <EndPoint X="197.20001" Y="329.2" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="197.20001" Y="329.2" />
                      <Point X="197.20001" Y="329.2" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="197.20001" Y="329.2" />
                      <ControlPoint1 X="174.40001" Y="332.6" />
                      <ControlPoint2 X="155.00002" Y="314" />
                      <EndPoint X="154.2" Y="313.2" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="154.2" Y="313.2" />
                      <Point X="161.6" Y="305.6" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="161.6" Y="305.6" />
                      <Point X="157.8" Y="309.40002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="157.8" Y="309.40002" />
                      <Point X="161.6" Y="305.6" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="161.6" Y="305.6" />
                      <Point X="161.6" Y="305.6" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="161.6" Y="305.6" />
                      <ControlPoint1 X="161.6" Y="305.6" />
                      <ControlPoint2 X="178" Y="321.2" />
                      <EndPoint X="195.6" Y="318.6" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="195.6" Y="318.6" />
                      <Point X="195.6" Y="318.6" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="195.6" Y="318.6" />
                      <ControlPoint1 X="206.20001" Y="317" />
                      <ControlPoint2 X="215.60002" Y="308.80002" />
                      <EndPoint X="223.40001" Y="294.6" />
                    </Bezier>
                  </PathFigure>
                </Path>
                <Path FillMode="Alternate" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544B" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="False">
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="313.59998" Y="271.4" />
                      <ControlPoint1 X="313.59998" Y="274.05096" />
                      <ControlPoint2 X="312.66272" Y="276.3137" />
                      <EndPoint X="310.7882" Y="278.18823" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="310.7882" Y="278.18823" />
                      <Point X="310.7882" Y="278.18823" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="310.7882" Y="278.18823" />
                      <ControlPoint1 X="308.9137" Y="280.0627" />
                      <ControlPoint2 X="306.65094" Y="281" />
                      <EndPoint X="303.99997" Y="281" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="303.99997" Y="281" />
                      <Point X="303.99997" Y="281" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="303.99997" Y="281" />
                      <ControlPoint1 X="301.34903" Y="281" />
                      <ControlPoint2 X="299.0863" Y="280.0627" />
                      <EndPoint X="297.21176" Y="278.18823" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="297.21176" Y="278.18823" />
                      <Point X="297.21176" Y="278.18823" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="297.21176" Y="278.18823" />
                      <ControlPoint1 X="295.33725" Y="276.3137" />
                      <ControlPoint2 X="294.4" Y="274.05096" />
                      <EndPoint X="294.4" Y="271.4" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="294.4" Y="271.4" />
                      <Point X="294.4" Y="271.4" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="294.4" Y="271.4" />
                      <ControlPoint1 X="294.4" Y="268.74902" />
                      <ControlPoint2 X="295.33725" Y="266.48627" />
                      <EndPoint X="297.21176" Y="264.61176" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="297.21176" Y="264.61176" />
                      <Point X="297.21176" Y="264.61176" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="297.21176" Y="264.61176" />
                      <ControlPoint1 X="299.0863" Y="262.73724" />
                      <ControlPoint2 X="301.34903" Y="261.8" />
                      <EndPoint X="303.99997" Y="261.8" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="303.99997" Y="261.8" />
                      <Point X="303.99997" Y="261.8" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="303.99997" Y="261.8" />
                      <ControlPoint1 X="306.65094" Y="261.8" />
                      <ControlPoint2 X="308.9137" Y="262.73724" />
                      <EndPoint X="310.7882" Y="264.61176" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="310.7882" Y="264.61176" />
                      <Point X="310.7882" Y="264.61176" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="310.7882" Y="264.61176" />
                      <ControlPoint1 X="312.66272" Y="266.48627" />
                      <ControlPoint2 X="313.59998" Y="268.74902" />
                      <EndPoint X="313.59998" Y="271.4" />
                    </Bezier>
                  </PathFigure>
                </Path>
                <Path FillMode="Alternate" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544B" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="False">
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="201.79999" Y="271.4" />
                      <ControlPoint1 X="201.8" Y="274.05096" />
                      <ControlPoint2 X="200.86275" Y="276.3137" />
                      <EndPoint X="198.9882" Y="278.18823" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="198.9882" Y="278.18823" />
                      <Point X="198.9882" Y="278.18823" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="198.9882" Y="278.18823" />
                      <ControlPoint1 X="197.11371" Y="280.0627" />
                      <ControlPoint2 X="194.85097" Y="281" />
                      <EndPoint X="192.19998" Y="281" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="192.19998" Y="281" />
                      <Point X="192.19998" Y="281" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="192.19998" Y="281" />
                      <ControlPoint1 X="189.54903" Y="281" />
                      <ControlPoint2 X="187.28627" Y="280.0627" />
                      <EndPoint X="185.41176" Y="278.18823" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="185.41176" Y="278.18823" />
                      <Point X="185.41176" Y="278.18823" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="185.41176" Y="278.18823" />
                      <ControlPoint1 X="183.53723" Y="276.3137" />
                      <ControlPoint2 X="182.59998" Y="274.05096" />
                      <EndPoint X="182.59998" Y="271.4" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="182.59998" Y="271.4" />
                      <Point X="182.59998" Y="271.4" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="182.59998" Y="271.4" />
                      <ControlPoint1 X="182.59998" Y="268.74902" />
                      <ControlPoint2 X="183.53723" Y="266.48627" />
                      <EndPoint X="185.41176" Y="264.61176" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="185.41176" Y="264.61176" />
                      <Point X="185.41176" Y="264.61176" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="185.41176" Y="264.61176" />
                      <ControlPoint1 X="187.28627" Y="262.73724" />
                      <ControlPoint2 X="189.54903" Y="261.8" />
                      <EndPoint X="192.19998" Y="261.8" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="192.19998" Y="261.8" />
                      <Point X="192.19998" Y="261.8" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="192.19998" Y="261.8" />
                      <ControlPoint1 X="194.85097" Y="261.8" />
                      <ControlPoint2 X="197.11371" Y="262.73724" />
                      <EndPoint X="198.9882" Y="264.61176" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="198.9882" Y="264.61176" />
                      <Point X="198.9882" Y="264.61176" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="198.9882" Y="264.61176" />
                      <ControlPoint1 X="200.86275" Y="266.48627" />
                      <ControlPoint2 X="201.8" Y="268.74902" />
                      <EndPoint X="201.79999" Y="271.4" />
                    </Bezier>
                  </PathFigure>
                </Path>
                <Path FillMode="Alternate" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FFFFAC80" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="20">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="False">
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="228.40001" Y="433.2" />
                      <ControlPoint1 X="228.40001" Y="466.22662" />
                      <ControlPoint2 X="237.44385" Y="493" />
                      <EndPoint X="248.6" Y="493" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="248.6" Y="493" />
                      <Point X="248.6" Y="493" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="248.6" Y="493" />
                      <ControlPoint1 X="259.75616" Y="493" />
                      <ControlPoint2 X="268.8" Y="466.22662" />
                      <EndPoint X="268.8" Y="433.2" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="268.8" Y="433.2" />
                      <Point X="268.8" Y="433.2" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="268.8" Y="433.2" />
                      <ControlPoint1 X="268.8" Y="400.17337" />
                      <ControlPoint2 X="259.75616" Y="373.4" />
                      <EndPoint X="248.6" Y="373.4" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="248.6" Y="373.4" />
                      <Point X="248.6" Y="373.4" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="248.6" Y="373.4" />
                      <ControlPoint1 X="237.44385" Y="373.4" />
                      <ControlPoint2 X="228.40001" Y="400.17337" />
                      <EndPoint X="228.40001" Y="433.2" />
                    </Bezier>
                  </PathFigure>
                </Path>
                <Path FillMode="Winding" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544C" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="248.6" Y="493" />
                      <ControlPoint1 X="237.4" Y="493" />
                      <ControlPoint2 X="228.40001" Y="466.2" />
                      <EndPoint X="228.40001" Y="433.2" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="228.40001" Y="433.2" />
                      <Point X="228.40001" Y="433.2" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="228.40001" Y="433.2" />
                      <ControlPoint1 X="228.40001" Y="400.2" />
                      <ControlPoint2 X="237.4" Y="373.4" />
                      <EndPoint X="248.6" Y="373.4" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="248.6" Y="373.4" />
                      <Point X="248.6" Y="373.4" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="248.6" Y="373.4" />
                      <Point X="248.6" Y="373.4" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Alternate" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FFFFAC80" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="20">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="False">
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="308.4895" Y="339.44662" />
                      <ControlPoint1 X="300.60092" Y="347.3352" />
                      <ControlPoint2 X="313.1376" Y="372.6618" />
                      <EndPoint X="336.49097" Y="396.0152" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="336.49097" Y="396.0152" />
                      <Point X="336.49097" Y="396.0152" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="336.49097" Y="396.0152" />
                      <ControlPoint1 X="359.8443" Y="419.36853" />
                      <ControlPoint2 X="385.1709" Y="431.9052" />
                      <EndPoint X="393.05948" Y="424.0166" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="393.05948" Y="424.0166" />
                      <Point X="393.05948" Y="424.0166" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="393.05948" Y="424.0166" />
                      <ControlPoint1 X="400.94806" Y="416.12805" />
                      <ControlPoint2 X="388.4114" Y="390.8014" />
                      <EndPoint X="365.05807" Y="367.44806" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="365.05807" Y="367.44806" />
                      <Point X="365.05807" Y="367.44806" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="365.05807" Y="367.44806" />
                      <ControlPoint1 X="341.7047" Y="344.09473" />
                      <ControlPoint2 X="316.37808" Y="331.55804" />
                      <EndPoint X="308.4895" Y="339.44662" />
                    </Bezier>
                  </PathFigure>
                </Path>
                <Path FillMode="Winding" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544C" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="386.19998" Y="426.2" />
                      <ControlPoint1 X="375" Y="426.2" />
                      <ControlPoint2 X="355" Y="414.4" />
                      <EndPoint X="336.4" Y="395.80002" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="336.4" Y="395.80002" />
                      <Point X="336.4" Y="395.80002" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="336.4" Y="395.80002" />
                      <ControlPoint1 X="313" Y="372.40002" />
                      <ControlPoint2 X="300.6" Y="347.2" />
                      <EndPoint X="308.4" Y="339.2" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="308.4" Y="339.2" />
                      <Point X="308.4" Y="339.2" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="308.4" Y="339.2" />
                      <ControlPoint1 X="310" Y="337.6" />
                      <ControlPoint2 X="312.39996" Y="336.8" />
                      <EndPoint X="315.19998" Y="336.8" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="315.19998" Y="336.8" />
                      <Point X="315.19998" Y="336.8" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="315.19998" Y="336.8" />
                      <ControlPoint1 X="326.4" Y="336.8" />
                      <ControlPoint2 X="346.4" Y="348.6" />
                      <EndPoint X="365" Y="367.2" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="365" Y="367.2" />
                      <Point X="365" Y="367.2" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="365" Y="367.2" />
                      <ControlPoint1 X="388.4" Y="390.6" />
                      <ControlPoint2 X="400.8" Y="415.8" />
                      <EndPoint X="393" Y="423.8" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="393" Y="423.8" />
                      <Point X="393" Y="423.8" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="393" Y="423.8" />
                      <ControlPoint1 X="391.4" Y="425.4" />
                      <ControlPoint2 X="389" Y="426.2" />
                      <EndPoint X="386.19998" Y="426.2" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="386.19998" Y="426.2" />
                      <Point X="386.19998" Y="426.2" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="386.19998" Y="426.2" />
                      <Point X="386.19998" Y="426.2" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Alternate" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FFFFAC80" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="20">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="False">
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="134.17253" Y="367.32965" />
                      <ControlPoint1 X="110.81917" Y="390.68298" />
                      <ControlPoint2 X="98.28252" Y="416.00958" />
                      <EndPoint X="106.1711" Y="423.8982" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="106.1711" Y="423.8982" />
                      <Point X="106.1711" Y="423.8982" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="106.1711" Y="423.8982" />
                      <ControlPoint1 X="114.05968" Y="431.78677" />
                      <ControlPoint2 X="139.38629" Y="419.25012" />
                      <EndPoint X="162.73964" Y="395.89676" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="162.73964" Y="395.89676" />
                      <Point X="162.73964" Y="395.89676" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="162.73964" Y="395.89676" />
                      <ControlPoint1 X="186.093" Y="372.5434" />
                      <ControlPoint2 X="198.62965" Y="347.2168" />
                      <EndPoint X="190.74107" Y="339.32822" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="190.74107" Y="339.32822" />
                      <Point X="190.74107" Y="339.32822" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="190.74107" Y="339.32822" />
                      <ControlPoint1 X="182.8525" Y="331.43964" />
                      <ControlPoint2 X="157.5259" Y="343.9763" />
                      <EndPoint X="134.17253" Y="367.32965" />
                    </Bezier>
                  </PathFigure>
                </Path>
                <Path FillMode="Winding" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544C" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="113" Y="426.2" />
                      <ControlPoint1 X="110.200005" Y="426.2" />
                      <ControlPoint2 X="107.799995" Y="425.4" />
                      <EndPoint X="106.2" Y="423.8" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="106.2" Y="423.8" />
                      <Point X="106.2" Y="423.8" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="106.2" Y="423.8" />
                      <ControlPoint1 X="98.4" Y="416" />
                      <ControlPoint2 X="110.8" Y="390.6" />
                      <EndPoint X="134.2" Y="367.2" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="134.2" Y="367.2" />
                      <Point X="134.2" Y="367.2" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="134.2" Y="367.2" />
                      <ControlPoint1 X="152.8" Y="348.6" />
                      <ControlPoint2 X="172.6" Y="336.80002" />
                      <EndPoint X="184.00002" Y="336.80002" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="184.00002" Y="336.80002" />
                      <Point X="184.00002" Y="336.80002" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="184.00002" Y="336.80002" />
                      <ControlPoint1 X="186.80002" Y="336.80002" />
                      <ControlPoint2 X="189.20001" Y="337.60004" />
                      <EndPoint X="190.80002" Y="339.2" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="190.80002" Y="339.2" />
                      <Point X="190.80002" Y="339.2" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="190.80002" Y="339.2" />
                      <ControlPoint1 X="198.60002" Y="347.00003" />
                      <ControlPoint2 X="186.20001" Y="372.40002" />
                      <EndPoint X="162.8" Y="395.80002" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="162.8" Y="395.80002" />
                      <Point X="162.8" Y="395.80002" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="162.8" Y="395.80002" />
                      <ControlPoint1 X="144.2" Y="414.40002" />
                      <ControlPoint2 X="124.40001" Y="426.2" />
                      <EndPoint X="113" Y="426.2" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="113" Y="426.2" />
                      <Point X="113" Y="426.2" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="113" Y="426.2" />
                      <Point X="113" Y="426.2" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Alternate" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FFFFC4E8" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="19.999998">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="False">
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="294.41507" Y="391.92776" />
                      <ControlPoint1 X="286.65936" Y="395.1403" />
                      <ControlPoint2 X="288.04785" Y="416.27542" />
                      <EndPoint X="297.5163" Y="439.13437" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="297.5163" Y="439.13437" />
                      <Point X="297.5163" Y="439.13437" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="297.5163" Y="439.13437" />
                      <ControlPoint1 X="306.9848" Y="461.99332" />
                      <ControlPoint2 X="320.94778" Y="477.9199" />
                      <EndPoint X="328.7035" Y="474.70737" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="328.7035" Y="474.70737" />
                      <Point X="328.7035" Y="474.70737" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="328.7035" Y="474.70737" />
                      <ControlPoint1 X="336.45923" Y="471.49484" />
                      <ControlPoint2 X="335.07074" Y="450.35974" />
                      <EndPoint X="325.60223" Y="427.5008" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="325.60223" Y="427.5008" />
                      <Point X="325.60223" Y="427.5008" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="325.60223" Y="427.5008" />
                      <ControlPoint1 X="316.13376" Y="404.64185" />
                      <ControlPoint2 X="302.17078" Y="388.71524" />
                      <EndPoint X="294.41507" Y="391.92776" />
                    </Bezier>
                  </PathFigure>
                </Path>
                <Path FillMode="Winding" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544C" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="326.59998" Y="475" />
                      <ControlPoint1 X="318.59998" Y="475" />
                      <ControlPoint2 X="306.19998" Y="459.8" />
                      <EndPoint X="297.59998" Y="439" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="297.59998" Y="439" />
                      <Point X="297.59998" Y="439" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="297.59998" Y="439" />
                      <ControlPoint1 X="288.19998" Y="416.2" />
                      <ControlPoint2 X="286.59998" Y="395" />
                      <EndPoint X="294.4" Y="391.8" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="294.4" Y="391.8" />
                      <Point X="294.4" Y="391.8" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="294.4" Y="391.8" />
                      <ControlPoint1 X="295" Y="391.6" />
                      <ControlPoint2 X="295.8" Y="391.40002" />
                      <EndPoint X="296.6" Y="391.40002" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="296.6" Y="391.40002" />
                      <Point X="296.6" Y="391.40002" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="296.6" Y="391.40002" />
                      <ControlPoint1 X="304.6" Y="391.40002" />
                      <ControlPoint2 X="317" Y="406.6" />
                      <EndPoint X="325.6" Y="427.40002" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="325.6" Y="427.40002" />
                      <Point X="325.6" Y="427.40002" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="325.6" Y="427.40002" />
                      <ControlPoint1 X="335.00003" Y="450.2" />
                      <ControlPoint2 X="336.60004" Y="471.4" />
                      <EndPoint X="328.80002" Y="474.6" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="328.80002" Y="474.6" />
                      <Point X="328.80002" Y="474.6" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="328.80002" Y="474.6" />
                      <ControlPoint1 X="328.2" Y="474.8" />
                      <ControlPoint2 X="327.40002" Y="475" />
                      <EndPoint X="326.6" Y="475" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="326.6" Y="475" />
                      <Point X="326.6" Y="475" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="326.6" Y="475" />
                      <Point X="326.6" Y="475" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Alternate" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FFFFC4E8" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="19.999998">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="False">
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="172.51619" Y="427.2768" />
                      <ControlPoint1 X="163.0477" Y="450.13574" />
                      <ControlPoint2 X="161.65924" Y="471.27087" />
                      <EndPoint X="169.41495" Y="474.48337" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="169.41495" Y="474.48337" />
                      <Point X="169.41495" Y="474.48337" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="169.41495" Y="474.48337" />
                      <ControlPoint1 X="177.17065" Y="477.6959" />
                      <ControlPoint2 X="191.13364" Y="461.76932" />
                      <EndPoint X="200.60213" Y="438.91037" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="200.60213" Y="438.91037" />
                      <Point X="200.60213" Y="438.91037" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="200.60213" Y="438.91037" />
                      <ControlPoint1 X="210.07062" Y="416.05142" />
                      <ControlPoint2 X="211.45909" Y="394.91632" />
                      <EndPoint X="203.70338" Y="391.7038" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="203.70338" Y="391.7038" />
                      <Point X="203.70338" Y="391.7038" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="203.70338" Y="391.7038" />
                      <ControlPoint1 X="195.94768" Y="388.49127" />
                      <ControlPoint2 X="181.98468" Y="404.41785" />
                      <EndPoint X="172.51619" Y="427.2768" />
                    </Bezier>
                  </PathFigure>
                </Path>
                <Path FillMode="Winding" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544C" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="171.59999" Y="475" />
                      <ControlPoint1 X="171.59999" Y="475" />
                      <ControlPoint2 X="170.2" Y="475" />
                      <EndPoint X="169.4" Y="474.6" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="169.4" Y="474.6" />
                      <Point X="169.4" Y="474.6" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="169.4" Y="474.6" />
                      <ControlPoint1 X="161.59999" Y="471.4" />
                      <ControlPoint2 X="163.2" Y="450.2" />
                      <EndPoint X="172.59999" Y="427.40002" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="172.59999" Y="427.40002" />
                      <Point X="172.59999" Y="427.40002" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="172.59999" Y="427.40002" />
                      <ControlPoint1 X="181.2" Y="406.40002" />
                      <ControlPoint2 X="193.59999" Y="391.40002" />
                      <EndPoint X="201.59999" Y="391.40002" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="201.59999" Y="391.40002" />
                      <Point X="201.59999" Y="391.40002" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="201.59999" Y="391.40002" />
                      <ControlPoint1 X="202.4" Y="391.40002" />
                      <ControlPoint2 X="202.99998" Y="391.40002" />
                      <EndPoint X="203.79999" Y="391.8" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="203.79999" Y="391.8" />
                      <Point X="203.79999" Y="391.8" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="203.79999" Y="391.8" />
                      <ControlPoint1 X="211.59999" Y="395" />
                      <ControlPoint2 X="210" Y="416.2" />
                      <EndPoint X="200.59999" Y="439" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="200.59999" Y="439" />
                      <Point X="200.59999" Y="439" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="200.59999" Y="439" />
                      <ControlPoint1 X="191.99998" Y="460" />
                      <ControlPoint2 X="179.6" Y="475" />
                      <EndPoint X="171.59999" Y="475" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="171.59999" Y="475" />
                      <Point X="171.59999" Y="475" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="171.59999" Y="475" />
                      <Point X="171.59999" Y="475" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Winding" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FFFFC4E8" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="255.79999" Y="109.600006" />
                      <ControlPoint1 X="252.19998" Y="115.79999" />
                      <ControlPoint2 X="243.39998" Y="115.79999" />
                      <EndPoint X="239.79997" Y="109.600006" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="239.79997" Y="109.600006" />
                      <Point X="233.39998" Y="98.599976" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="233.39998" Y="98.599976" />
                      <Point X="218.99998" Y="73.79999" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="218.99998" Y="73.79999" />
                      <Point X="218.99998" Y="73.79999" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="218.99998" Y="73.79999" />
                      <Point X="276.19998" Y="73.79999" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="276.19998" Y="73.79999" />
                      <Point X="261.8" Y="98.599976" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="261.8" Y="98.599976" />
                      <Point X="255.40001" Y="109.600006" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Winding" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544C" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="247.8" Y="114.19998" />
                      <ControlPoint1 X="244.8" Y="114.19998" />
                      <ControlPoint2 X="241.6" Y="112.599976" />
                      <EndPoint X="239.8" Y="109.600006" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="239.8" Y="109.600006" />
                      <Point X="233.40001" Y="98.599976" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="233.40001" Y="98.599976" />
                      <Point X="219.00002" Y="73.79999" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="219.00002" Y="73.79999" />
                      <Point X="219.00002" Y="73.79999" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="219.00002" Y="73.79999" />
                      <Point X="276.19998" Y="73.79999" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="276.19998" Y="73.79999" />
                      <Point X="261.8" Y="98.599976" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="261.8" Y="98.599976" />
                      <Point X="255.40001" Y="109.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="255.40001" Y="109.600006" />
                      <Point X="255.40001" Y="109.600006" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="255.40001" Y="109.600006" />
                      <ControlPoint1 X="253.6" Y="112.600006" />
                      <ControlPoint2 X="250.59999" Y="114.19998" />
                      <EndPoint X="247.4" Y="114.19998" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="247.4" Y="114.19998" />
                      <Point X="247.4" Y="114.19998" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="247.4" Y="114.19998" />
                      <Point X="247.4" Y="114.19998" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Alternate" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FFFFF5B5" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <PolyLine LineColor="#FF000000">
                      <Point X="190.59999" Y="123.400024" />
                      <Point X="190.59999" Y="123.400024" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="190.59999" Y="123.400024" />
                      <Point X="176.2" Y="98.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="176.2" Y="98.600006" />
                      <Point X="162" Y="73.80002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="162" Y="73.80002" />
                      <Point X="190.59999" Y="73.80002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="190.59999" Y="73.80002" />
                      <Point X="219.2" Y="73.80002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="219.2" Y="73.80002" />
                      <Point X="204.79999" Y="98.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="204.79999" Y="98.600006" />
                      <Point X="190.59999" Y="123.400024" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="190.59999" Y="123.400024" />
                      <Point X="190.59999" Y="123.400024" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Alternate" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544C" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <PolyLine LineColor="#FF000000">
                      <Point X="190.59999" Y="123.400024" />
                      <Point X="190.59999" Y="123.400024" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="190.59999" Y="123.400024" />
                      <Point X="176.2" Y="98.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="176.2" Y="98.600006" />
                      <Point X="162" Y="73.80002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="162" Y="73.80002" />
                      <Point X="190.59999" Y="73.80002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="190.59999" Y="73.80002" />
                      <Point X="219.2" Y="73.80002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="219.2" Y="73.80002" />
                      <Point X="204.79999" Y="98.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="204.79999" Y="98.600006" />
                      <Point X="190.59999" Y="123.400024" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="190.59999" Y="123.400024" />
                      <Point X="190.59999" Y="123.400024" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="190.59999" Y="123.400024" />
                      <Point X="190.59999" Y="123.400024" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Alternate" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FFFFF5B5" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <PolyLine LineColor="#FF000000">
                      <Point X="162" Y="173.20001" />
                      <Point X="162" Y="173.20001" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="162" Y="173.20001" />
                      <Point X="147.59999" Y="148.40002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="147.59999" Y="148.40002" />
                      <Point X="133.4" Y="123.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="133.4" Y="123.600006" />
                      <Point X="162" Y="123.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="162" Y="123.600006" />
                      <Point X="190.59999" Y="123.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="190.59999" Y="123.600006" />
                      <Point X="176.2" Y="148.40002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="176.2" Y="148.40002" />
                      <Point X="162" Y="173.20001" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="162" Y="173.20001" />
                      <Point X="162" Y="173.20001" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Alternate" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544C" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <PolyLine LineColor="#FF000000">
                      <Point X="162" Y="173.20001" />
                      <Point X="162" Y="173.20001" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="162" Y="173.20001" />
                      <Point X="147.59999" Y="148.40002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="147.59999" Y="148.40002" />
                      <Point X="133.4" Y="123.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="133.4" Y="123.600006" />
                      <Point X="162" Y="123.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="162" Y="123.600006" />
                      <Point X="190.59999" Y="123.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="190.59999" Y="123.600006" />
                      <Point X="176.2" Y="148.40002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="176.2" Y="148.40002" />
                      <Point X="162" Y="173.20001" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="162" Y="173.20001" />
                      <Point X="162" Y="173.20001" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="162" Y="173.20001" />
                      <Point X="162" Y="173.20001" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Alternate" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FFFFF5B5" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <PolyLine LineColor="#FF000000">
                      <Point X="333.6" Y="173.20001" />
                      <Point X="333.6" Y="173.20001" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="333.6" Y="173.20001" />
                      <Point X="319.4" Y="148.40002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="319.4" Y="148.40002" />
                      <Point X="305" Y="123.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="305" Y="123.600006" />
                      <Point X="333.6" Y="123.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="333.6" Y="123.600006" />
                      <Point X="362.2" Y="123.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="362.2" Y="123.600006" />
                      <Point X="347.99997" Y="148.40002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="347.99997" Y="148.40002" />
                      <Point X="333.6" Y="173.20001" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="333.6" Y="173.20001" />
                      <Point X="333.6" Y="173.20001" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Alternate" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544C" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <PolyLine LineColor="#FF000000">
                      <Point X="333.6" Y="173.20001" />
                      <Point X="333.6" Y="173.20001" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="333.6" Y="173.20001" />
                      <Point X="319.4" Y="148.40002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="319.4" Y="148.40002" />
                      <Point X="305" Y="123.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="305" Y="123.600006" />
                      <Point X="333.6" Y="123.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="333.6" Y="123.600006" />
                      <Point X="362.2" Y="123.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="362.2" Y="123.600006" />
                      <Point X="347.99997" Y="148.40002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="347.99997" Y="148.40002" />
                      <Point X="333.6" Y="173.20001" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="333.6" Y="173.20001" />
                      <Point X="333.6" Y="173.20001" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="333.6" Y="173.20001" />
                      <Point X="333.6" Y="173.20001" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Alternate" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FFFFF5B5" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <PolyLine LineColor="#FF000000">
                      <Point X="305" Y="123.400024" />
                      <Point X="305" Y="123.400024" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="305" Y="123.400024" />
                      <Point X="290.8" Y="98.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="290.8" Y="98.600006" />
                      <Point X="276.4" Y="73.80002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="276.4" Y="73.80002" />
                      <Point X="305" Y="73.80002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="305" Y="73.80002" />
                      <Point X="333.6" Y="73.80002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="333.6" Y="73.80002" />
                      <Point X="319.4" Y="98.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="319.4" Y="98.600006" />
                      <Point X="305" Y="123.400024" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="305" Y="123.400024" />
                      <Point X="305" Y="123.400024" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Alternate" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544C" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <PolyLine LineColor="#FF000000">
                      <Point X="305" Y="123.400024" />
                      <Point X="305" Y="123.400024" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="305" Y="123.400024" />
                      <Point X="290.8" Y="98.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="290.8" Y="98.600006" />
                      <Point X="276.4" Y="73.80002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="276.4" Y="73.80002" />
                      <Point X="305" Y="73.80002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="305" Y="73.80002" />
                      <Point X="333.6" Y="73.80002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="333.6" Y="73.80002" />
                      <Point X="319.4" Y="98.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="319.4" Y="98.600006" />
                      <Point X="305" Y="123.400024" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="305" Y="123.400024" />
                      <Point X="305" Y="123.400024" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="305" Y="123.400024" />
                      <Point X="305" Y="123.400024" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Alternate" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FFFFAC80" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <PolyLine LineColor="#FF000000">
                      <Point X="247.8" Y="12.0000305" />
                      <Point X="247.8" Y="12.0000305" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="247.8" Y="12.0000305" />
                      <Point X="233.40001" Y="36.80005" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="233.40001" Y="36.80005" />
                      <Point X="219.2" Y="61.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="219.2" Y="61.600006" />
                      <Point X="247.8" Y="61.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="247.8" Y="61.600006" />
                      <Point X="276.4" Y="61.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="276.4" Y="61.600006" />
                      <Point X="262.19998" Y="36.80005" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="262.19998" Y="36.80005" />
                      <Point X="247.8" Y="12.0000305" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="247.8" Y="12.0000305" />
                      <Point X="247.8" Y="12.0000305" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Alternate" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544C" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <PolyLine LineColor="#FF000000">
                      <Point X="276.4" Y="61.600006" />
                      <Point X="276.4" Y="61.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="276.4" Y="61.600006" />
                      <Point X="247.8" Y="61.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="247.8" Y="61.600006" />
                      <Point X="219.2" Y="61.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="219.2" Y="61.600006" />
                      <Point X="233.40001" Y="36.80005" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="233.40001" Y="36.80005" />
                      <Point X="247.8" Y="12.0000305" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="247.8" Y="12.0000305" />
                      <Point X="262.19998" Y="36.80005" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="262.19998" Y="36.80005" />
                      <Point X="276.4" Y="61.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="276.4" Y="61.600006" />
                      <Point X="276.4" Y="61.600006" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="276.4" Y="61.600006" />
                      <Point X="276.4" Y="61.600006" />
                    </PolyLine>
                  </PathFigure>
                </Path>
                <Path FillMode="Winding" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544B" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <PolyLine LineColor="#FF000000">
                      <Point X="334.59998" Y="268.40002" />
                      <Point X="334.59998" Y="268.40002" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="334.59998" Y="268.40002" />
                      <Point X="341.4" Y="276.8" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="341.4" Y="276.8" />
                      <Point X="341.4" Y="276.8" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="341.4" Y="276.8" />
                      <ControlPoint1 X="341.4" Y="276.8" />
                      <ControlPoint2 X="332" Y="284.40002" />
                      <EndPoint X="318.8" Y="288" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="318.8" Y="288" />
                      <Point X="318.8" Y="288" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="318.8" Y="288" />
                      <ControlPoint1 X="301" Y="293" />
                      <ControlPoint2 X="284.4" Y="289" />
                      <EndPoint X="270.8" Y="276.60004" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="270.8" Y="276.60004" />
                      <Point X="278" Y="268.80005" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="278" Y="268.80005" />
                      <ControlPoint1 X="288.8" Y="278.80005" />
                      <ControlPoint2 X="301.4" Y="281.80005" />
                      <EndPoint X="315.6" Y="278.00003" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="315.6" Y="278.00003" />
                      <Point X="315.6" Y="278.00003" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="315.6" Y="278.00003" />
                      <ControlPoint1 X="326.6" Y="275.00003" />
                      <ControlPoint2 X="334.59998" Y="268.60004" />
                      <EndPoint X="334.59998" Y="268.60004" />
                    </Bezier>
                  </PathFigure>
                </Path>
                <Path FillMode="Winding" RenderTransform="1 0 0 -1 0 500">
                  <Brush>
                    <SolidBrush Color="#FF00544B" />
                  </Brush>
                  <Pen Alignment="Center" DashCap="Flat" DashOffset="0" DashStyle="Solid" EndCap="Flat" LineJoin="Miter" MiterLimit="10" StartCap="Flat" Width="26.666666">
                    <Brush>
                      <SolidBrush Color="#FFFFFFFF" />
                    </Brush>
                  </Pen>
                  <PathFigure IsClosed="True">
                    <PolyLine LineColor="#FF000000">
                      <Point X="217.59999" Y="268.8" />
                      <Point X="217.59999" Y="268.8" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="217.59999" Y="268.8" />
                      <Point X="224.8" Y="276.59998" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="224.8" Y="276.59998" />
                      <Point X="224.8" Y="276.59998" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="224.8" Y="276.59998" />
                      <ControlPoint1 X="211.2" Y="289" />
                      <ControlPoint2 X="194.40001" Y="293.19998" />
                      <EndPoint X="176" Y="288.59998" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="176" Y="288.59998" />
                      <Point X="176" Y="288.59998" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="176" Y="288.59998" />
                      <ControlPoint1 X="162.6" Y="285.2" />
                      <ControlPoint2 X="153" Y="278.19998" />
                      <EndPoint X="152.6" Y="277.8" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="152.6" Y="277.8" />
                      <Point X="159" Y="269.19998" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="159" Y="269.19998" />
                      <Point X="155.8" Y="273.4" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="155.8" Y="273.4" />
                      <Point X="159" Y="269.19998" />
                    </PolyLine>
                    <PolyLine LineColor="#FF000000">
                      <Point X="159" Y="269.19998" />
                      <Point X="159" Y="269.19998" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="159" Y="269.19998" />
                      <ControlPoint1 X="159" Y="269.19998" />
                      <ControlPoint2 X="167.4" Y="275.4" />
                      <EndPoint X="179" Y="278.19998" />
                    </Bezier>
                    <PolyLine LineColor="#FF000000">
                      <Point X="179" Y="278.19998" />
                      <Point X="179" Y="278.19998" />
                    </PolyLine>
                    <Bezier CurveColor="#FF000000">
                      <StartPoint X="179" Y="278.19998" />
                      <ControlPoint1 X="193.79999" Y="281.8" />
                      <ControlPoint2 X="206.59999" Y="278.59998" />
                      <EndPoint X="217.4" Y="268.59998" />
                    </Bezier>
                  </PathFigure>
                </Path>
              </Canvas>
            </Canvas>
          </Page>
        </Group>
      </Aps>`,
      description: 'Welcome to the floraverse.',
      recommendedInjectedWallets: [
        { name: 'Coinbase', url: 'https://www.coinbase.com/wallet' },
        { name: 'MetaMask', url: 'https://metamask.io' },
        { name: 'Binance', url: 'https://www.binance.com' },
        { name: 'Exodus', url: 'https://www.exodus.com/'}
      ],
    }
})

export default initWeb3Onboard
  